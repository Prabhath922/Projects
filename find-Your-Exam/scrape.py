import requests
from bs4 import BeautifulSoup
import json
import os

url = "https://www.dal.ca/exams/halifax-exam-schedule.html"

response = requests.get(url)

if response.status_code == 200:
    # Parse the HTML content of the page using BeautifulSoup
    soup = BeautifulSoup(response.text, "html.parser")
    
    # Find all table elements on the page
    all_tables = soup.find_all("table")

    if all_tables:
        all_exam_data = []

        # Loop through each table
        for exam_table in all_tables:
            headers = [th.text.strip() for th in exam_table.find_all("th")]
            
            for row in exam_table.find_all("tr")[1:]:  # Skip the header row
                columns = row.find_all("td")
                if columns:
                    # Create a dictionary for each row with header mapping
                    row_data = {headers[i]: col.text.strip() for i, col in enumerate(columns)}
                    all_exam_data.append(row_data)  # Add the row to the unified list

        # Save the data to a single JSON file
        with open('db/schedule.json', 'w') as jsonfile:
            json.dump(all_exam_data, jsonfile, indent=4)

        print("All exam data scraped and saved to 'db/schedule.json'")
    else:
        print("Could not find any tables on the page.")
else:
    print("Failed to retrieve the page. Status code:", response.status_code)
