from pathlib import Path
from PIL import Image
import numpy as np

src = Path(
    r"c:\Users\ryoji\00myapp\ai_demo_workspace\sites\ideal_official\public\images\use-case-hero-products.png"
)
im = Image.open(src).convert("RGBA")
arr = np.array(im).astype(np.float32)
r, g, b, a = arr[:, :, 0], arr[:, :, 1], arr[:, :, 2], arr[:, :, 3]

# Light blue / near-white studio backdrop → transparent
# Keep dark UI pixels (dashboard, phones) opaque
brightness = (r + g + b) / 3.0
# blue-ish light: B high, R/G lower but still bright overall
blueish = (b >= r - 5) & (b >= g - 8) & (brightness >= 210)
near_white = (brightness >= 235) & ((np.maximum(np.maximum(r, g), b) - np.minimum(np.minimum(r, g), b)) <= 35)
soft_light = (brightness >= 200) & (b >= 190) & ((b - r) >= -5)

bg = near_white | blueish | soft_light
# Don't punch holes in mid-gray UI: require fairly bright
bg = bg & (brightness >= 198)

alpha = a.copy()
alpha[bg & (brightness >= 235)] = 0
soft = bg & (brightness < 235)
if soft.any():
    fade = np.clip((235 - brightness[soft]) / 37.0, 0, 1)
    alpha[soft] = np.minimum(alpha[soft], fade * 255)

arr[:, :, 3] = alpha
out = Image.fromarray(arr.astype(np.uint8), "RGBA")
bbox = out.getbbox()
if bbox:
    out = out.crop(bbox)
out.save(src, "PNG", optimize=True)
print("updated", src.name, out.size, "transparent fraction sample ok")
