export const getData = async (query: string) => {
  try {
    const response = await fetch(
      `https://eldenring.fanapis.com/api/${query}?limit=10000`,
      {
        cache: "force-cache",
      }
    );
    const responseData = await response.json();

    return responseData?.data;
  } catch (error) {
    `Whoops sth went from when try to fetc data https://eldenring.fanapis.com/api/${query}`;
  }
};
