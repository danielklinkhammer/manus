import os
import markdown
import glob

# Verzeichnisse für Markdown-Dateien und HTML-Ausgabe
markdown_dirs = [
    '/home/ubuntu/course_project/final_package/module',
    '/home/ubuntu/course_project/final_package/uebungen',
    '/home/ubuntu/course_project/final_package/bewertung'
]
html_output_dir = '/home/ubuntu/course_website/html_content'

# HTML-Template
html_template = """<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title}</title>
    <style>
        body {{
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
        }}
        h1, h2, h3 {{
            color: #2563eb;
        }}
        h1 {{
            border-bottom: 2px solid #2563eb;
            padding-bottom: 10px;
        }}
        a {{
            color: #2563eb;
            text-decoration: none;
        }}
        a:hover {{
            text-decoration: underline;
        }}
        pre {{
            background-color: #f1f5f9;
            padding: 15px;
            border-radius: 5px;
            overflow-x: auto;
        }}
        table {{
            border-collapse: collapse;
            width: 100%;
            margin: 20px 0;
        }}
        th, td {{
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
        }}
        th {{
            background-color: #f1f5f9;
        }}
        .back-link {{
            display: inline-block;
            margin-top: 30px;
            background-color: #2563eb;
            color: white;
            padding: 10px 15px;
            border-radius: 5px;
        }}
        .back-link:hover {{
            background-color: #1d4ed8;
            text-decoration: none;
        }}
    </style>
</head>
<body>
    {content}
    <p><a href="/" class="back-link">Zurück zur Startseite</a></p>
</body>
</html>"""

# Funktion zum Konvertieren von Markdown zu HTML
def convert_markdown_to_html(markdown_file, output_dir):
    # Dateinamen und Pfade bestimmen
    filename = os.path.basename(markdown_file)
    base_name = os.path.splitext(filename)[0]
    html_filename = f"{base_name}.html"
    output_path = os.path.join(output_dir, html_filename)
    
    # Markdown-Inhalt lesen
    with open(markdown_file, 'r', encoding='utf-8') as f:
        md_content = f.read()
    
    # Titel aus der ersten Zeile extrahieren (falls vorhanden)
    title_match = md_content.split('\n', 1)[0].strip('# ')
    title = title_match if title_match else base_name
    
    # Markdown zu HTML konvertieren
    html_content = markdown.markdown(md_content, extensions=['tables'])
    
    # HTML-Datei mit Template erstellen
    full_html = html_template.format(title=title, content=html_content)
    
    # HTML-Datei speichern
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(full_html)
    
    print(f"Konvertiert: {markdown_file} -> {output_path}")
    return html_filename, title

# Hauptfunktion
def main():
    # Verzeichnisstruktur für HTML-Ausgabe erstellen
    os.makedirs(html_output_dir, exist_ok=True)
    
    # Liste aller konvertierten Dateien mit Titeln
    converted_files = []
    
    # Alle Markdown-Dateien in den angegebenen Verzeichnissen konvertieren
    for md_dir in markdown_dirs:
        md_files = glob.glob(os.path.join(md_dir, "*.md"))
        for md_file in md_files:
            html_filename, title = convert_markdown_to_html(md_file, html_output_dir)
            converted_files.append((html_filename, title))
    
    # Zusätzlich die Kursstruktur und README konvertieren
    additional_files = [
        '/home/ubuntu/course_project/final_package/kursstruktur.md',
        '/home/ubuntu/course_project/final_package/README.md'
    ]
    
    for add_file in additional_files:
        if os.path.exists(add_file):
            html_filename, title = convert_markdown_to_html(add_file, html_output_dir)
            converted_files.append((html_filename, title))
    
    # Index-Seite erstellen
    create_index_page(converted_files)

# Funktion zum Erstellen der Index-Seite
def create_index_page(file_list):
    index_content = """
    <h1>Designing with and for Artificial Intelligence</h1>
    <p>Ein Wahlpflichtmodul zur Rolle von KI im UX-Design und in Human-Computer Interaction</p>
    
    <h2>Kursinhalte</h2>
    <ul>
    """
    
    # Module
    index_content += "<h3>Module</h3><ul>"
    for filename, title in file_list:
        if filename.startswith("modul") and not filename.startswith("modul") and filename.endswith(".html"):
            index_content += f'<li><a href="/html_content/{filename}">{title}</a></li>\n'
    index_content += "</ul>"
    
    # Übungen
    index_content += "<h3>Übungen und Workshops</h3><ul>"
    for filename, title in file_list:
        if "workshop" in filename and filename.endswith(".html"):
            index_content += f'<li><a href="/html_content/{filename}">{title}</a></li>\n'
    index_content += "</ul>"
    
    # Bewertungsmaterialien
    index_content += "<h3>Bewertungsmaterialien</h3><ul>"
    for filename, title in file_list:
        if "bewertung" in filename and filename.endswith(".html"):
            index_content += f'<li><a href="/html_content/{filename}">{title}</a></li>\n'
    index_content += "</ul>"
    
    # Andere Dokumente
    index_content += "<h3>Weitere Dokumente</h3><ul>"
    for filename, title in file_list:
        if (filename.startswith("kursstruktur") or filename.startswith("README")) and filename.endswith(".html"):
            index_content += f'<li><a href="/html_content/{filename}">{title}</a></li>\n'
    index_content += "</ul>"
    
    index_content += "</ul>"
    
    # Index-HTML erstellen
    index_html = html_template.format(title="Kursübersicht", content=index_content)
    
    # Index-Datei speichern
    with open(os.path.join(html_output_dir, "index.html"), 'w', encoding='utf-8') as f:
        f.write(index_html)
    
    print(f"Index-Seite erstellt: {os.path.join(html_output_dir, 'index.html')}")

if __name__ == "__main__":
    main()
