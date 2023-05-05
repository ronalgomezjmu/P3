var textbox = document.getElementById("search");

textbox.addEventListener("keypress", async (event) => {
  if (event.key == "Enter") {
    const formmated = "";
    const firsturl = `https://random-stuff-api.p.rapidapi.com/ai/response?message=${textbox.value}&user_id=420`;
    const firstoptions = {
      method: "GET",
      headers: {
        Authorization: "WIT52HjDaCoX",
        "X-RapidAPI-Key": "8f088bac16mshf949f099af09f09p19a0ffjsnd3ce7bc3125a",
        "X-RapidAPI-Host": "random-stuff-api.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(firsturl, firstoptions);
      const result = await response.text();
	  console.log(result);
      const url =
        "https://voicerss-text-to-speech.p.rapidapi.com/?key=5f898693e803480592176f7ae8d9b94f";
      const options = {
        method: "POST",
        headers: {
          "content-type": "application/x-www-form-urlencoded",
          "X-RapidAPI-Key":
            "8f088bac16mshf949f099af09f09p19a0ffjsnd3ce7bc3125a",
          "X-RapidAPI-Host": "voicerss-text-to-speech.p.rapidapi.com",
        },
        body: new URLSearchParams({
          src: result,
          hl: "en-us",
          r: "0",
          c: "mp3",
          f: "8khz_8bit_mono",
        }),
      };

      try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    } catch (error) {
      console.error(error);
    }
  }
});
