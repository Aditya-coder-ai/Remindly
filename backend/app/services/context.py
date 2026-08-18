"""
backend.app.services.context
============================

Service to format retrieved long-term memories into LLM prompt context.
"""

from typing import List, Dict, Any

def format_memories_for_llm(memories: List[Dict[str, Any]]) -> str:
    """
    Takes a list of retrieved memory dictionaries and formats them into a clean 
    string suitable for inclusion in an LLM prompt.
    """
    if not memories:
        return ""

    formatted_lines = ["Relevant patient memories:"]
    for i, mem in enumerate(memories, start=1):
        content = mem.get("content", "").strip()
        if content:
            formatted_lines.append(f"{i}. {content}")

    return "\n".join(formatted_lines)
