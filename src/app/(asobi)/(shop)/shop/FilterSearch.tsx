"use client";
import { ProductCategory } from "@/payload-types";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { FaFilter, FaSearch } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

type Props = {
  cl: ProductCategory[];
};

export default function FilterSearch({ cl }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  return (
    <section id="sh">
      <form
        className="searchbar"
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          const params = new URLSearchParams(searchParams);
          if (formData.get("s") === "") params.delete("s");
          params.set("s", formData.get("s") as string);
          router.push(`${pathname}?${params.toString()}`);
        }}
      >
        <button type="submit" className="ico btn hv">
          <FaSearch className="" />
        </button>
        <input type="search" name="s" id="s" />
      </form>

      <div className="action">
        <Link href={"/track"} className="btn btn-shoph">
          Track My Order <FaArrowRightLong />
        </Link>
        <select
          className="btn btn-shoph select"
          onChange={(e) => {
            const params = new URLSearchParams(searchParams);
            params.set("c", e.target.value);
            router.push(`${pathname}?${params.toString()}`);
          }}
        >
          {/* <button className="btn btn-shoph">Category</button> */}
          <option value="all">All Category</option>
          {cl.map((c: ProductCategory) => {
            return (
              <option value={c.name} key={c.id}>
                {c.name}
              </option>
            );
          })}
        </select>
      </div>
    </section>
  );
}
