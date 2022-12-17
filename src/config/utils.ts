export const formattingPhone = (phone_country_code: string, phone: string) => {
  return `${phone_country_code} (${phone.substring(0, 3)}) ${phone.substring(
    3,
    6
  )}-${phone.substring(6)}`;
};
