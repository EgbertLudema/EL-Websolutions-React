import type { Metadata } from "next";
import ClientServicesPage from "./ClientServicesPage";

export const metadata: Metadata = {
  title: "Diensten – EL Websolutions",
  description: "Meer weten over de diensten die ik aanbied? Neem een kijkje voor meer informatie.",
};

export default function Page() {
  return <ClientServicesPage />;
}
