"use client";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "@/components/ui/animated-modal";
import Image from "next/image";
import { motion } from "framer-motion";

export function EnquiryModal() {
  return (
    <div className="w-full md:w-auto fixed bottom-0 md:bottom-24 md:right-2 flex items-center justify-center">
      <Modal>
        <ModalTrigger className="z-[40] relative w-full md:w-auto bg-nav flex justify-center group/modal-btn">
          <span className="md:group-hover/modal-btn:translate-x-40 text-center text-gray-950 transition duration-500">
            Enquire
          </span>
          <div className="hidden md:block md:-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
            ✈️
          </div>
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
            <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
              Book your trip to{" "}
              <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                Bali
              </span>{" "}
              now! ✈️
            </h4>
          </ModalContent>
          <ModalFooter className="gap-4">
            <button className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28">
              Cancel
            </button>
            <button className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
              Raise Enquiry
            </button>
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  );
}