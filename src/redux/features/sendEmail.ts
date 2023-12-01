import { sendMail } from "../api/sendMail";

const sendEmail = sendMail.injectEndpoints({
  endpoints: (builder) => ({
    sendEmail: builder.mutation({
      query: (body: {
        name: string;
        email: string;
        message: string;
        subject: string;
      }) => ({
        url: "/sendEmail",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useSendEmailMutation } = sendEmail;
