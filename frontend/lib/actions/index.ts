"use server";
import StrapiApi from "@/api";
import { transporter } from "../email";

export const getMainPage = async () => {
  try {
    const { data } = await StrapiApi.get("/api/main-page", {
      params: {
        populate: "*",
      },
    });
    console.log(data);

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getAboutPage = async () => {
  const { data } = await StrapiApi.get("/api/about-page", {
    params: {
      populate: ["valuesList", "valuesList.image"],
    },
  });
  return data;
};

export const getOurPartners = async () => {
  const { data } = await StrapiApi.get("/api/our-partner", {
    params: {
      populate: ["partnersList", "partnersList.image"],
    },
  });
  return data;
};

export const getOurApproach = async () => {
  const { data } = await StrapiApi.get("/api/our-approach", {
    params: {
      populate: "*",
    },
  });
  return data;
};

export const getContactPage = async () => {
  const { data } = await StrapiApi.get("/api/contact", {
    params: {
      populate: "*",
    },
  });
  return data;
};

export const getOurServices = async () => {
  const { data } = await StrapiApi.get("/api/our-service", {
    params: {
      populate: ["classesList", "classesList.image"],
    },
  });
  console.log("services", data);

  return data;
};

export const sendEmail = async (values: any) => {
  try {
    const info = await transporter.sendMail({
      to: [process.env.EMAIL_USER || ""],
      subject: "Request from houseofconsultancy.ae",
      html: `
Name: <b>${values.username}</b>
Email: <b>${values.email}</b>
Message: <b>${values.message}</b>
`, // html body
    });

    console.log("Message sent: %s", info.messageId);

    return { ok: true };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
