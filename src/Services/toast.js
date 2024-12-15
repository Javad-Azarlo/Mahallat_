import { toast } from "react-toastify";

function useToast(type, content) {
  switch (type) {
    case "error":
      toast.error(content, {
        position: "top-center",
      });
      break;
    case "success":
      toast.success(content, {
        position: "top-center",
      });
      break;
    case "warn":
      toast.warn(content, {
        position: "top-center",
      });
      break;
    case "info":
      toast.info(content, {
        position: "top-center",
      });
  }
}
export default useToast;
