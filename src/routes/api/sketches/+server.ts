import type { SketchInfo } from '$lib/types';
import { json } from '@sveltejs/kit';

async function getSketches() {

  const paths = import.meta.glob('/src/_content/sketches/**/sketch.ts', { as: 'url' });

  const sketches: SketchInfo[] = Object.keys(paths).map((sketch) => {
    return {
      name: sketch.split('/').at(-2) || '',
      path: sketch
    }
  })

  return { sketches };
}

export async function GET() {
  const { sketches } = await getSketches();
  return json({ sketches });
}
