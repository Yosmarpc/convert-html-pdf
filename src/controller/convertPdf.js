/** @format **/
const puppeteer = require("puppeteer");

export const pruebaGet = (req, res) => {
  res.send("Hello World!");
};

export const convertHtmlPdf = async (req, res) => {
  const url = req.body.url;
  const nameArchivo = req.body.name;

  try {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.setViewport({ width: 1024, height: 880 });
    await page.goto(url, { waitUntil: "networkidle2" }).catch(function () {
      console.log("Error while loading up the url.");
    });
    //await page.emulateMedia('screen');
    const pdf = await page
      .pdf({
        path: "src/dist/upload/" + nameArchivo + ".pdf",
        format: "letter",
        printBackground: true,
      })
      .catch(function () {
        res.status(404).json({
          message: "Error creating pdf",
          success: false,
        });
        console.log("Error creating pdf.");
      });
    browser.close();
    res.status(200).json({
      success: true,
      message: "ATENCION SE HA CREADO EL PDF DE MANERA CORRECTA",
    });

    return pdf;
    //console.log("ATENCION SE HA CREADO EL PDF DE MANERA CORRECTA");
  } catch (error) {
    console.log("ERROR:", error.message);
  }
};
