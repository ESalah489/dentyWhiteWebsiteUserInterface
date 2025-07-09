import ButtonSubmit from "../../../components/Buttons/ButtonSubmit";
import PopupsAddDoctors from "../../../components/Popups/PopupsAddDoctors";
import AdminTables from "../AdminTables";
import { FaPlus } from "react-icons/fa";

const Doctors = () => {
  return (
    <>
      <main className="h-full overflow-y-auto bg-white">
        <div className="container px-6 mx-auto grid">
          <h2
            className="my-6 text-2xl font-semibold"
            style={{ color: "#10244b" }}
          >
            Doctors
          </h2>
          <div className="mb-6 flex justify-end " style={{ width: "100%" }}>
            <PopupsAddDoctors/>
          </div>
          <div className="w-full overflow-hidden rounded-lg shadow-xs">
            <AdminTables />
          </div>
        </div>
      </main>
    </>
  );
};

export default Doctors;
