import Map from '../Components/Map'
import SideBar from '../Components/SideBar'

export default function AppLayout () {
  return (
    <main className="flex flex-col sm:flex-row flex-grow h-screen  justify-center items-center">
      {/* Sidebar */}
      <section className="sm:w-1/3 lg:w-auto h-screen bg-gray-100">
        <SideBar />
      </section>

      {/* Map Section */}
      <section className="sm:flex-auto  h-full  ">
        <Map />
      </section>
    </main>
  );
}
