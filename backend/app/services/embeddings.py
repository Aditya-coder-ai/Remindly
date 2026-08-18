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
            logger.error(f"Failed to load embedding model: {e}")
            raise RuntimeError("Embedding model initialization failed") from e
    return _model


def generate_embedding(text: str) -> List[float]:
    """
    Generates a 384-dimensional vector embedding for the given text.
    
    Args:
        text (str): The memory content to embed.
        
    Returns:
        List[float]: A 384-dimensional list of floats representing the embedding.
        
    Raises:
        ValueError: If the text is empty or purely whitespace.
        RuntimeError: If model fails to load or inference fails.
    """
    if not text or not text.strip():
        raise ValueError("Cannot generate embedding for empty text.")
    
    model = _get_model()
    try:
        # Generate the embedding. The model returns a numpy array.
        embedding = model.encode(text.strip())
        return embedding.tolist()
    except Exception as e:
        logger.error(f"Error generating embedding: {e}")
        raise RuntimeError("Failed to generate embedding") from e
