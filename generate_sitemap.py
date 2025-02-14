from lxml import etree
import os
import datetime

# Define the base URL of your site
base_url = "https://krypt.drstryk.com"

# Function to scan the repository for HTML files
def find_html_files(directory):
    html_files = []
    for root, _, files in os.walk(directory):
        for file in files:
            if file.endswith(".html"):
                html_files.append(os.path.join(root, file))
    return html_files

# Function to generate URLs from file paths
def generate_urls(base_url, html_files):
    urls = []
    for file_path in html_files:
        # Convert file path to URL path
        url_path = file_path.replace(os.getcwd(), "").replace("\\", "/").lstrip("/")
        urls.append(f"{base_url}/{url_path}")
    return urls

# Find all HTML files in the repository
html_files = find_html_files(os.getcwd())

# Generate URLs for the sitemap
urls = generate_urls(base_url, html_files)

# Create the root element for the sitemap
urlset = etree.Element("urlset", xmlns="http://www.sitemaps.org/schemas/sitemap/0.9")

# Add each URL to the sitemap
for url in urls:
    url_element = etree.SubElement(urlset, "url")
    loc = etree.SubElement(url_element, "loc")
    loc.text = url
    lastmod = etree.SubElement(url_element, "lastmod")
    lastmod.text = datetime.datetime.now().strftime("%Y-%m-%d")

# Write the sitemap to a file
sitemap_path = os.path.join(os.getcwd(), "sitemap.xml")
with open(sitemap_path, "wb") as f:
    f.write(etree.tostring(urlset, pretty_print=True, xml_declaration=True, encoding="UTF-8"))

print(f"Sitemap generated at {sitemap_path}")