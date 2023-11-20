import { useSessionStorage } from "usehooks-ts";
import { Button } from "@/components/ui/button";
import { LuX, LuArrowRight, LuBell } from "react-icons/lu";
import { motion, AnimatePresence } from "framer-motion";
export default function Alert() {
  const [open, setOpen] = useSessionStorage("sitcon-2024-alert", true);
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="bg-primary overflow-hidden"
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          exit={{ height: 0 }}
        >
          <div className="container flex items-center justify-between py-2 text-white gap-2">
            <div className="flex gap-2 items-center">
              <LuBell />
              SITCON 2024 徵稿中！
            </div>
            <div className="flex gap-2 items-center">
              <Button
                className="bg-primary-600 hover:bg-primary-700 active:bg-primary-800"
                asChild
              >
                <a href="https://sitcon.org/2024" target="_blank">
                  立即前往
                  <LuArrowRight className="inline-block ml-2" />
                </a>
              </Button>
              <Button
                size="icon"
                className="hover:bg-primary-500 active:bg-primary-600"
                onClick={() => setOpen(false)}
              >
                <LuX />
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
