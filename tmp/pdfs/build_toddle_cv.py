from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_RIGHT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    BaseDocTemplate, Frame, PageTemplate, Paragraph, Spacer, Table, TableStyle,
    KeepTogether, PageBreak, HRFlowable
)


ROOT = Path(r"C:\Users\Admin\Desktop\Portfolio")
OUT = ROOT / "output" / "pdf" / "Jeevitesh_Gaur_Toddle_Product_Design_CV.pdf"
OUT.parent.mkdir(parents=True, exist_ok=True)

NAVY = colors.HexColor("#243B5A")
CORAL = colors.HexColor("#E69A9A")
INK = colors.HexColor("#25272A")
MUTED = colors.HexColor("#66717C")
LINE = colors.HexColor("#D8DDE1")
PALE = colors.HexColor("#F2F4F5")
IVORY = colors.HexColor("#FFFDF8")


def register_fonts():
    candidates = {
        "Body": r"C:\Windows\Fonts\arial.ttf",
        "BodyBold": r"C:\Windows\Fonts\arialbd.ttf",
        "Display": r"C:\Windows\Fonts\georgia.ttf",
        "DisplayItalic": r"C:\Windows\Fonts\georgiai.ttf",
    }
    for name, path in candidates.items():
        pdfmetrics.registerFont(TTFont(name, path))


register_fonts()

styles = {
    "name": ParagraphStyle("name", fontName="Display", fontSize=27, leading=30, textColor=NAVY, spaceAfter=4),
    "role": ParagraphStyle("role", fontName="BodyBold", fontSize=9.7, leading=12, textColor=CORAL, tracking=1.7, spaceAfter=8),
    "contact": ParagraphStyle("contact", fontName="Body", fontSize=7.7, leading=10, textColor=MUTED),
    "profile": ParagraphStyle("profile", fontName="Display", fontSize=9.8, leading=14, textColor=INK),
    "section": ParagraphStyle("section", fontName="BodyBold", fontSize=9.6, leading=12, textColor=CORAL, tracking=1.25, spaceBefore=8, spaceAfter=7),
    "job": ParagraphStyle("job", fontName="DisplayItalic", fontSize=12, leading=14, textColor=NAVY),
    "org": ParagraphStyle("org", fontName="Body", fontSize=8, leading=10, textColor=MUTED),
    "date": ParagraphStyle("date", fontName="Body", fontSize=7.8, leading=10, textColor=MUTED, alignment=TA_RIGHT),
    "body": ParagraphStyle("body", fontName="Body", fontSize=8.1, leading=11.1, textColor=INK, spaceAfter=2),
    "bullet": ParagraphStyle("bullet", fontName="Body", fontSize=8.05, leading=11.05, textColor=INK, leftIndent=9, firstLineIndent=-7, bulletIndent=0, spaceAfter=2.2),
    "small": ParagraphStyle("small", fontName="Body", fontSize=7.4, leading=10.2, textColor=INK),
    "small_muted": ParagraphStyle("small_muted", fontName="Body", fontSize=7.2, leading=9.4, textColor=MUTED),
    "footer": ParagraphStyle("footer", fontName="Body", fontSize=6.8, leading=8, textColor=MUTED, alignment=TA_CENTER),
}


def P(text, style="body"):
    return Paragraph(text, styles[style])


def bullet(text):
    return Paragraph("• " + text, styles["bullet"])


def section(title):
    return [P(title.upper(), "section")]


def rule(space_before=4, space_after=6):
    return HRFlowable(width="100%", thickness=0.6, color=LINE, spaceBefore=space_before, spaceAfter=space_after)


def position(role, org, dates, bullets):
    head = Table(
        [[P(role, "job"), P(dates, "date")], [P(org, "org"), ""]],
        colWidths=[132*mm, 38*mm],
        hAlign="LEFT",
    )
    head.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 0),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
    ]))
    return [head, Spacer(1, 4)] + [bullet(x) for x in bullets]


def project(title, meta, date, bullets):
    return position(title, meta, date, bullets)


def first_page_header():
    contact = (
        '<link href="mailto:jeeviteshgaur28@gmail.com" color="#66717C">jeeviteshgaur28@gmail.com</link>'
        '  |  Ahmedabad, India  |  Open to Bengaluru<br/>'
        '<link href="https://www.behance.net/JeeviteshGaur_Design" color="#243B5A"><u>Portfolio / Behance</u></link>'
        '  |  <link href="https://www.linkedin.com/in/jeevitesh-gaur-452b84331" color="#243B5A"><u>LinkedIn</u></link>'
    )
    return [
        P("Jeevitesh Gaur", "name"),
        P("PRODUCT &amp; INTERACTION DESIGNER", "role"),
        P(contact, "contact"),
        Spacer(1, 10),
        Table([[P(
            "Product and interaction design student creating user-centred digital and physical experiences through research, prototyping, and iterative testing. Experienced in onboarding flows, educational games, and research-led concepts, with a particular interest in meaningful products for learning.",
            "profile")]], colWidths=[170*mm], style=TableStyle([
                ("BACKGROUND", (0, 0), (-1, -1), PALE),
                ("BOX", (0, 0), (-1, -1), 0, PALE),
                ("LEFTPADDING", (0, 0), (-1, -1), 9*mm),
                ("RIGHTPADDING", (0, 0), (-1, -1), 9*mm),
                ("TOPPADDING", (0, 0), (-1, -1), 5*mm),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 5*mm),
            ])),
        Spacer(1, 6),
    ]


def page_canvas(canvas, doc):
    canvas.saveState()
    canvas.setFillColor(IVORY)
    canvas.rect(0, 0, A4[0], A4[1], fill=1, stroke=0)
    canvas.setFillColor(MUTED)
    canvas.setFont("Body", 6.8)
    canvas.drawCentredString(A4[0] / 2, 9*mm, f"Jeevitesh Gaur  |  Product & Interaction Designer  |  {doc.page}")
    canvas.restoreState()


doc = BaseDocTemplate(
    str(OUT), pagesize=A4,
    leftMargin=20*mm, rightMargin=20*mm, topMargin=17*mm, bottomMargin=16*mm,
    title="Jeevitesh Gaur - Product Design CV",
    author="Jeevitesh Gaur",
    subject="Application for Product Design Internship at Toddle",
)
frame = Frame(doc.leftMargin, doc.bottomMargin, doc.width, doc.height, id="main", showBoundary=0)
doc.addPageTemplates([PageTemplate(id="cv", frames=[frame], onPage=page_canvas)])

story = []
story += first_page_header()
story += section("Experience")
story += position("AR/VR &amp; Game Designer", '<link href="https://www.educai8.org/" color="#66717C"><u>Educai.8</u></link>', "Feb 2026 – Present", [
    "Designed and prototyped two educational board games that help school students practise decision-making and explore potential career paths.",
    "Planned and conducted playtesting with 15+ students, translating observed behaviours and feedback into improvements to game mechanics, instructions, and interaction flow.",
    "Collaborated with the team to balance learning objectives with clarity, engagement, and age-appropriate gameplay.",
    "Exploring an AR/VR extension to create a more immersive and interactive learning experience.",
])
story.append(rule())
story += position("UX Designer", '<link href="https://yochaakhosa.com/" color="#66717C"><u>YoChaakhoSa</u></link>', "Oct 2024 – Jul 2025", [
    "Redesigned the website homepage and onboarding journey, translating business and brand goals into user flows, structured wireframes, and high-fidelity interface designs.",
    "Improved interaction clarity through reusable patterns, interface refinements, and purposeful micro-interactions.",
    "Presented design decisions to the founder and incorporated feedback; the final direction was approved as aligned with the organisation’s vision.",
    "Created and edited 3–4 brand videos, extending the product’s visual language across digital communication.",
])

story += section("Selected Projects")
story += project("Hop and Shop — Civic Experience Design", "Ahmedabad Municipal Corporation brief", "2025", [
    "Conducted contextual field research in a busy public market in Vasna, documenting user behaviours, environmental constraints, and stakeholder needs.",
    "Synthesised observations into key insights and opportunity areas for improving the market experience.",
    "Developed a research-led concept grounded in the needs and realities observed on site.",
])
story.append(rule(3, 5))
story += project("Raksh — Human-Centred Product Concept", "Gaganyaan 2027 brief · Guided by ISRO-affiliated faculty", "2025", [
    "Selected as part of a small student team to address a human-factors challenge associated with extended space wear.",
    "Researched existing maximum-absorbency garment systems and translated technical and physiological constraints into a product concept.",
    "Collaborated on a concept intended to improve comfort and usability in an extreme environment; faculty presented it to the ISRO Chairman, where it received a positive response.",
])

story.append(PageBreak())
story += [P("Jeevitesh Gaur", "job"), P("PRODUCT &amp; INTERACTION DESIGNER", "role"), rule(2, 4)]

story += section("Core Skills")
skills_table = Table([
    [P("<b>Product Design</b>", "small"), P("Interaction design, UX design, user-centred design, information architecture, user flows, wireframing, prototyping, and visual design", "small")],
    [P("<b>Research</b>", "small"), P("Contextual inquiry, user interviews, observation, usability testing, research synthesis, and problem framing", "small")],
    [P("<b>Collaboration</b>", "small"), P("Design critique, concept communication, stakeholder presentation, interdisciplinary collaboration, and iterative design", "small")],
    [P("<b>Tools</b>", "small"), P("Figma, Framer, Adobe Illustrator, Adobe Photoshop, After Effects, Blender, Unity, and DaVinci Resolve", "small")],
], colWidths=[31*mm, 139*mm])
skills_table.setStyle(TableStyle([
    ("VALIGN", (0, 0), (-1, -1), "TOP"),
    ("LEFTPADDING", (0, 0), (-1, -1), 0),
    ("RIGHTPADDING", (0, 0), (-1, -1), 3),
    ("TOPPADDING", (0, 0), (-1, -1), 2.5),
    ("BOTTOMPADDING", (0, 0), (-1, -1), 3.5),
    ("LINEBELOW", (0, 0), (-1, -2), 0.35, LINE),
]))
story.append(skills_table)

story += section("Education")
education = Table([
    [P("<font name='DisplayItalic' size='11' color='#243B5A'>Bachelor of Design — Interaction Design</font><br/><font color='#66717C'>Anant National University · Minor: Product Design</font>", "small"), P("2023–2027", "date")],
    [P("<font name='DisplayItalic' size='11' color='#243B5A'>Google UX Design Professional Certificate</font><br/><font color='#66717C'>In progress · Started Jul 2026</font>", "small"), P("In progress", "date")],
], colWidths=[135*mm, 35*mm])
education.setStyle(TableStyle([
    ("VALIGN", (0, 0), (-1, -1), "TOP"),
    ("LEFTPADDING", (0, 0), (-1, -1), 0),
    ("RIGHTPADDING", (0, 0), (-1, -1), 0),
    ("TOPPADDING", (0, 0), (-1, -1), 3),
    ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
    ("LINEBELOW", (0, 0), (-1, 0), 0.35, LINE),
]))
story.append(education)

story += section("Leadership &amp; Additional Experience")
story += position("General Secretary, Student Council", "Anant National University", "", [
    "Progressed from General Committee Member to General Secretary and led a 20-member team responsible for student-welfare initiatives, events, campaigns, and campus-life improvements.",
    "Coordinated across students and university stakeholders, strengthening ownership, communication, and collaborative problem-solving.",
])
story.append(rule(3, 4))
story += position("Contingent Leader, Mood Indigo", "IIT Bombay", "2023–2024", [
    "Led university contingents of 161 students in 2023 and 94 students in 2024; participating teams achieved four national-level wins in 2023 and two in 2024.",
])
story.append(rule(3, 4))
story += position("Tech Lead, TEDx Ahmedabad", "Technical experience and event delivery", "", [
    "Managed stage screens, sound, and speaker-facing displays, ensuring synchronisation between speaker cues and the audience experience.",
])

doc.build(story)
print(OUT)
