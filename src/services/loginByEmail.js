import { sendRequest } from "../utils/sendRequest";

export async function loginByEmail(email, password) {
  try {
    const data = await sendRequest({
      url: "/api/v1.0/accounts/login/by-email",
      method: "post",
      body: { Password: password, UserName: email },
    });

    if (!data.succeeded) {
      return {
        isSucceeded: false,
        data: "اطلاعات وارد شده درست نمیباشد.",
      };
    }

    return {
      isSucceeded: true,
      data: data.result,
    };
  } catch (error) {
    return { isSucceeded: false, data: "مشکلی پیش آمده، دوباره امتحان کنید." };
  }
}
