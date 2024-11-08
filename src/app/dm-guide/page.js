import Link from 'next/link';

export default function DMGuidePage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Dungeon Master's Guide</h1>
      <p className="mb-4">Explore essential tools and rules for Dungeon Masters.</p>
      <ul className="list-disc pl-5">
        <li>
          <Link href="/dm-guide/combat" className="text-blue-500 hover:underline">
            Combat Rules
          </Link>
        </li>
        <li>
          <Link href="/dm-guide/conditions" className="text-blue-500 hover:underline">
            Conditions
          </Link>
        </li>
        <li>
          <Link href="/dm-guide/npcs" className="text-blue-500 hover:underline">
            NPC Generator
          </Link>
        </li>
        <li>
          <Link href="/dm-guide/treasure" className="text-blue-500 hover:underline">
            Treasure Tables
          </Link>
        </li>
        <li>
          <Link href="/dm-guide/environment" className="text-blue-500 hover:underline">
            Environmental Hazards
          </Link>
        </li>
      </ul>
    </div>
  );
}
