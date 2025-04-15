import React from "react";
import BackButton from "../components/shared/BackButton";
import BottomNav from "../components/shared/BottomNav";
import TableCard from "../components/tables/TableCard";
import { useState } from "react";
import { tables } from "../constants/index.js";
export default function Tables() {
  const [status, setStatus] = useState("all");
  return (
    <section className="bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden">
      <div className="flex items-center justify-between px-8 py-4">
        <div>
          <BackButton />
          <h1 className="text-[#f5f5f5] text-2xl font-bold tracking-wider">
            Tables
          </h1>
        </div>
        <div className="flex items-center justify-around gap-4">
          <button
            onClick={() => setStatus("all")}
            className={`text-[#ababab] text-lg ${
              status === "all" && "bg-[#383838]"
            }  rounded-lg px-4 py-2 font-semibold`}
          >
            All
          </button>
          <button
            onClick={() => setStatus("booked")}
            className={`text-[#ababab] text-lg ${
              status === "booked" && "bg-[#383838]"
            }  rounded-lg px-4 py-2 font-semibold`}
          >
            Booked
          </button>
        </div>
      </div>
      <div className="flex flex-wrap gap-6 p-10 ">
        {tables?.map((table) => {
          return (
            <TableCard
              key={table.id}
              name={table.name}
              status={table.status}
              initials={table.initial}
            />
          );
        })}
      </div>

      <BottomNav />
    </section>
  );
}
