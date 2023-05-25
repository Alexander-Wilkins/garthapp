import { toast } from "@zerodevx/svelte-toast";

export function copyToast() {
  toast.push("Agent Info Copied!", {
    theme: {
      "--toastBarHeight": 0,
      "--toastColor": "mintcream",
      "--toastBackground": "rgba(72,187,120,0.9)",
      "--toastBarBackground": "#2F855A",
    },
  });
}

export function downloadTemplateToast() {
  toast.push("Downloaded Templates!", {
    theme: {
      "--toastBarHeight": 0,
      "--toastColor": "mintcream",
      "--toastBackground": "rgba(72,187,120,0.9)",
      "--toastBarBackground": "#2F855A",
    },
  });
}
export function downloadAttchmentToast() {
  toast.push("Downloaded Attchments!", {
    theme: {
      "--toastBarHeight": 0,
      "--toastColor": "mintcream",
      "--toastBackground": "rgba(72,187,120,0.9)",
      "--toastBarBackground": "#2F855A",
    },
  });
}
