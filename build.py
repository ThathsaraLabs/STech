"""
ScITech Static Page Generator Script
Assembles static HTML files from src/pages/ using reusable partials in src/partials/.
Runs standalone and outputs clean static HTML directly to the project root.
"""

import os
import re

ROOT_DIR = os.path.dirname(os.path.abspath(__file__))
PARTIALS_DIR = os.path.join(ROOT_DIR, 'src', 'partials')
PAGES_DIR = os.path.join(ROOT_DIR, 'src', 'pages')

def read_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        return f.read()

def write_file(filepath, content):
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

def build_pages():
    print("Building ScITech pages...")

    head_partial = read_file(os.path.join(PARTIALS_DIR, 'head.html'))
    header_partial = read_file(os.path.join(PARTIALS_DIR, 'header.html'))
    footer_partial = read_file(os.path.join(PARTIALS_DIR, 'footer.html'))
    cta_partial = read_file(os.path.join(PARTIALS_DIR, 'consultation-cta.html'))

    if not os.path.exists(PAGES_DIR):
        print(f"Pages directory {PAGES_DIR} not found.")
        return

    pages = [f for f in os.listdir(PAGES_DIR) if f.endswith('.html')]

    for page_name in pages:
        page_path = os.path.join(PAGES_DIR, page_name)
        content = read_file(page_path)

        # Extract metadata comments or custom tags if present
        title_match = re.search(r'<!-- META_TITLE:\s*(.*?) -->', content)
        title = title_match.group(1).strip() if title_match else "ScITech Research Studio & Academy"

        desc_match = re.search(r'<!-- META_DESC:\s*(.*?) -->', content)
        desc = desc_match.group(1).strip() if desc_match else "ScITech offers academic research guidance, technical report writing, data analysis, and online education."

        # Active Navigation highlighting
        nav_keys = {
            'NAV_HOME': 'bg-white/10 text-white' if page_name == 'index.html' else '',
            'NAV_SERVICES': 'bg-white/10 text-white' if page_name in ['services.html', 'academic-research.html', 'writing-reports.html', 'data-analysis.html'] else '',
            'NAV_ACADEMY': 'bg-white/10 text-white' if page_name in ['academy.html', 'course-detail.html'] else '',
            'NAV_RESOURCES': 'bg-white/10 text-white' if page_name in ['resources.html', 'resource-detail.html'] else '',
            'NAV_ABOUT': 'bg-white/10 text-white' if page_name == 'about.html' else '',
        }

        curr_header = header_partial
        for k, v in nav_keys.items():
            curr_header = curr_header.replace(f'{{{{{k}}}}}', v)

        curr_head = head_partial.replace('{{TITLE}}', title).replace('{{DESCRIPTION}}', desc)

        # Replace Partial tags
        full_html = content.replace('{{HEAD}}', curr_head)
        full_html = full_html.replace('{{HEADER}}', curr_header)
        full_html = full_html.replace('{{FOOTER}}', footer_partial)
        full_html = full_html.replace('{{CONSULTATION_CTA}}', cta_partial)

        output_path = os.path.join(ROOT_DIR, page_name)
        write_file(output_path, full_html)
        print(f"  [OK] Generated: {page_name}")

    print("All static pages built successfully.")

if __name__ == '__main__':
    build_pages()
