import os
import markdown
import sys

def convert_markdown_to_html(input_dir, output_dir):
    """
    Convert all markdown files in input_dir to HTML files in output_dir
    """
    # Create output directory if it doesn't exist
    os.makedirs(output_dir, exist_ok=True)
    
    # Get all markdown files in input directory
    md_files = [f for f in os.listdir(input_dir) if f.endswith('.md')]
    
    # Convert each markdown file to HTML
    for md_file in md_files:
        input_path = os.path.join(input_dir, md_file)
        output_file = md_file.replace('.md', '.html')
        output_path = os.path.join(output_dir, output_file)
        
        # Read markdown content
        with open(input_path, 'r', encoding='utf-8') as f:
            md_content = f.read()
        
        # Convert to HTML
        html_content = markdown.markdown(md_content, extensions=['tables', 'fenced_code'])
        
        # Add basic styling
        styled_html = f"""
        <!DOCTYPE html>
        <html lang="de">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>{md_file.replace('.md', '')}</title>
            <style>
                body {{
                    font-family: Arial, sans-serif;
                    line-height: 1.6;
                    max-width: 800px;
                    margin: 0 auto;
                    padding: 20px;
                    color: #333;
                }}
                h1, h2, h3, h4, h5, h6 {{
                    color: #2c3e50;
                    margin-top: 1.5em;
                }}
                h1 {{
                    border-bottom: 2px solid #eee;
                    padding-bottom: 10px;
                }}
                h2 {{
                    border-bottom: 1px solid #eee;
                    padding-bottom: 5px;
                }}
                a {{
                    color: #3498db;
                    text-decoration: none;
                }}
                a:hover {{
                    text-decoration: underline;
                }}
                code {{
                    background-color: #f8f8f8;
                    padding: 2px 4px;
                    border-radius: 3px;
                }}
                pre {{
                    background-color: #f8f8f8;
                    padding: 10px;
                    border-radius: 5px;
                    overflow-x: auto;
                }}
                blockquote {{
                    border-left: 4px solid #ccc;
                    padding-left: 15px;
                    color: #666;
                }}
                img {{
                    max-width: 100%;
                    height: auto;
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
                    background-color: #f2f2f2;
                }}
                tr:nth-child(even) {{
                    background-color: #f9f9f9;
                }}
                .back-link {{
                    display: inline-block;
                    margin-bottom: 20px;
                    padding: 5px 10px;
                    background-color: #f0f0f0;
                    border-radius: 3px;
                }}
            </style>
        </head>
        <body>
            <a href="../index.html" class="back-link">← Zurück zur Startseite</a>
            {html_content}
        </body>
        </html>
        """
        
        # Write HTML to output file
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(styled_html)
        
        print(f"Converted {md_file} to {output_file}")

if __name__ == "__main__":
    input_dir = "/home/ubuntu/enhanced_modules"
    output_dir = "/home/ubuntu/course_website/public/enhanced_modules"
    convert_markdown_to_html(input_dir, output_dir)
    print("Conversion complete!")
