import { components } from "@/lib/edamam/interfaces";

export const mockErrorResponse: components["schemas"]["Errors"] = [
  {
    errorCode: "code_one",
    message: "message_one",
    params: [],
  },
];
