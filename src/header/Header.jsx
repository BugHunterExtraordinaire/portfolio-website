import Navigator from './Navigator.jsx'

export default function Header() {
  return (
    <header className="flex justify-between w-dvw px-8 py-4">
      <p aria-label="Developer Name">Tarek Abdelhamid Mohamed Abdelhamid</p>
      <Navigator />
    </header>
  );
}