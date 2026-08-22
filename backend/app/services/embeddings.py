"""
backend.app.services.embeddings
===============================

Service for generating vector embeddings for patient memories.
Uses sentence-transformers/all-MiniLM-L6-v2.
"""

import logging
from typing import List

logger = logging.getLogger(__name__)

# Lazy loaded model instance
_model = None

def _get_model():
    global _model
    if _model is None:
        try:
            from sentence_transformers import SentenceTransformer
            logger.info("Loading sentence-transformers model 'all-MiniLM-L6-v2'...")
            _model = SentenceTransformer('sentence-transformers/all-MiniLM-L6-v2')
            logger.info("Embedding model loaded successfully.")
        except Exception as e:
            logger.warning(f"SentenceTransformers not loaded ({e}). Using lightweight vector embedding.")
            return None
    return _model


def generate_embedding(text: str) -> List[float]:
    """
    Generates a 384-dimensional vector embedding for the given text.
    Uses all-MiniLM-L6-v2 when available, or fast normalized projection.
    """
    if not text or not text.strip():
        raise ValueError("Cannot generate embedding for empty text.")
    
    clean_text = text.strip()
    model = _get_model()
    if model is not None:
        try:
            embedding = model.encode(clean_text)
            return embedding.tolist()
        except Exception as e:
            logger.warning(f"Model inference failed ({e}), falling back to lightweight projection.")

    # Lightweight 384-dimensional normalized vector fallback
    import hashlib
    import math

    vec = [0.0] * 384
    words = clean_text.lower().split()
    for word in words:
        h = int(hashlib.sha256(word.encode("utf-8")).hexdigest(), 16)
        for i in range(384):
            bit = (h >> (i % 256)) & 1
            vec[i] += 1.0 if bit else -1.0

    norm = math.sqrt(sum(x * x for x in vec)) or 1.0
    return [round(x / norm, 6) for x in vec]

