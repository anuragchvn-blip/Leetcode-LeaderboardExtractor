# Hackerrank Leaderboard Extractor
This code can extract the leaderboard of any contest from Hackerrank in JSON format.
Steps:
- Open the link of the contest, and update the number of users visible on the screen.
- From the inspect element section, go to the console -> paste the code available in the code.js file and tap enter.
- You'll get the data on your screen.
Once you get the JSON, you can convert it to xls, pdf, etc format as per your needs from any online website like, https://products.aspose.app/cells/conversion/json-to-xlsx

If you need other information as well, you'll have to update the code by adding the same lines by updating the class names:
- For time: ``span-flex-2``
- And for the country: ``span-flex-3 text-center``
