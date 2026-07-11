import React, { useState } from "react";
import "./LogoPage.css";
import AFS from '../../Img/AFS.jpg';
import EV from '../../Img/EV.jpg';
import Eventimg from '../../Img/Eventimg.jpg';
import Environment from '../../Img/Environment.jpg';
import Food from '../../Img/Food.jpg'
import Corporate from '../../Img/Corporate.jpg'
import Energy from '../../Img/Energy.webp'
import { Leaf } from "lucide-react";
import { Factory } from "lucide-react";
import { Building2 } from "lucide-react";
import { EvCharger } from "lucide-react";
import { Fan } from "lucide-react";
import { TicketCheck } from "lucide-react";
import { Apple } from "lucide-react";
import { Box } from "lucide-react";
import mRna from "../../Img/mRna.jpeg";
import WindPower from "../../Img/WindPower.jpg";
import Appslogo from "../../Img/Applogo.png";

const GRID_ITEMS = [
  {
    id: 1,
    type: "color",
    className: "cell-color-green-horns",
    gridRow: "1",
    gridColumn: "1",
    modalTag: "Iconography",
    title: "Rock On Icon",
    modalDesc: "A custom hand-horns gesture icon designed for a modern youth clothing line. Represents attitude, energy, and freedom.",
    icon: (color) => <Leaf size={48} strokeWidth={2} color={'#14751D'} />
  },
  {
    id: 2,
    type: "image",
    className: "",
    gridRow: "1",
    gridColumn: "2",
    title: "Explorers",
    imgUrl: "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?q=80&w=800&auto=format&fit=crop",
    modalTag: "Brand Identity",
    modalDesc: "Complete brand visual identity for Explorers, a premium kids outdoor apparel line. The design focuses on adventure, durability, and vibrant colors to inspire young adventurers.",
    metadata: { client: "Explorers Co.", role: "Brand Lead", year: "2025" }
  },
  {
    id: 3,
    type: "color",
    className: "cell-color-blue-chair",
    gridRow: "1",
    gridColumn: "3",
    modalTag: "Furniture Design",
    title: "Minimal Chair Icon",
    modalDesc: "Sleek, geometric furniture icon designed for an luxury interior design studio, capturing comfort, form, and minimalism.",
    icon: (color) => (
      <Building2 size={48} strokeWidth={2} color={'#004d73'} />
    )
  },
  {
    id: 4,
    type: "image",
    className: "",
    gridRow: "1",
    gridColumn: "4",
    title: "Corporate",
    imgUrl: Corporate,
    modalTag: "Photography",
    modalDesc: "Macro photography campaign for a baby skincare line, highlighting water purity, softness, and playfulness.",
    metadata: { client: "PureBaby", role: "Creative Director", year: "2024" }
  },
  {
    id: 5,
    type: "image",
    className: "span-2x2",
    gridRow: "1 / span 2",
    gridColumn: "5 / span 2",
    title: "Oil and Gas",
    imgUrl: AFS,
    modalTag: "App UX/UI",
    modalDesc: "Empathy-driven mobile application and brand strategy for new parents. Capturing the intimate, tender connection between parents and children with soft colors and high-contrast accessibility.",
    metadata: { client: "Goosebumps App", role: "UI/UX Designer", year: "2025" }
  },
  {
    id: 6,
    type: "image",
    className: "",
    gridRow: "1",
    gridColumn: "7",
    title: "Medical Science",
    imgUrl: mRna,
    modalTag: "Editorial",
    modalDesc: "Pet health editorial imagery capturing joy and organic energy, part of an online lifestyle magazine feature.",
    metadata: { client: "Paws & Tail", role: "Photographer", year: "2024" }
  },
  {
    id: 7,
    type: "image",
    className: "",
    gridRow: "2",
    gridColumn: "1",
    title: "Environment",
    imgUrl: Environment,
    modalTag: "Advertising",
    modalDesc: "Rich, textured commercial visual for a specialty coffee roastery. Emphasizes slow mornings, steam, and high-quality beans.",
    metadata: { client: "Roast & Co.", role: "Visual Stylist", year: "2025" }
  },
  {
    id: 8,
    type: "image",
    className: "span-2x2",
    gridRow: "2 / span 2",
    gridColumn: "2 / span 2",
    title: "EV Charging",
    imgUrl: EV,
    modalTag: "Corporate Identity",
    modalDesc: "Comprehensive rebrand and visual system for a construction infrastructure firm. Highlighting structural integrity, heavy machinery safety, and the real heroes building our cities.",
    metadata: { client: "BuildForce", role: "Art Director", year: "2026" }
  },
  {
    id: 9,
    type: "color",
    className: "cell-color-orange-umbrella",
    gridRow: "2",
    gridColumn: "4",
    modalTag: "Visual Art",
    title: "Umbrella Icon",
    modalDesc: "A bright umbrella icon designed for a weather alert app. Combines friendly accessibility with a striking pop of orange.",
    icon: (color) => (
      <Factory size={48} strokeWidth={2} color={'#8c5602'} />
    )
  },
  {
    id: 10,
    type: "image",
    className: "",
    gridRow: "2",
    gridColumn: "7",
    title: "Visionary",
    imgUrl: "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=800&auto=format&fit=crop",
    modalTag: "Art Direction",
    modalDesc: "Fine art forest photography capturing deep misty layers. Developed for the cover of an environmental non-profit's annual report.",
    metadata: { client: "EcoEarth", role: "Art Director", year: "2025" }
  },
  {
    id: 11,
    type: "color",
    className: "cell-color-green-tree",
    gridRow: "3",
    gridColumn: "1",
    modalTag: "Sustainability",
    title: "Tree Icon",
    modalDesc: "Minimal green tree icon designed for a carbon offsetting platform. Simplicity, balance, and ecological preservation are highlighted.",
    icon: (color) => (
      <EvCharger size={48} strokeWidth={2} color={'#4b6613'} />
    )
  },
  {
    id: 12,
    type: "color",
    className: "cell-color-orange-life",
    gridRow: "3",
    gridColumn: "4",
    modalTag: "Typography",
    title: "Life",
    modalDesc: "Typographic branding study for 'Life' magazine. Exploring bold geometry and vibrant background contrast.",
    customContent: () => (
      <span style={{ fontSize: "2.4rem", fontWeight: "700", fontFamily: "Outfit, sans-serif", letterSpacing: "-0.5px" }}>Life</span>
    )
  },
  {
    id: 13,
    type: "image",
    className: "",
    gridRow: "3",
    gridColumn: "5",
    title: "Food Packaging",
    imgUrl: Food,
    modalTag: "Domestic Art",
    modalDesc: "Creative product photography showing the quiet beauty in daily rituals. Designed for a eco-friendly detergent campaign.",
    metadata: { client: "CleanCo", role: "Photographer", year: "2024" }
  },
  {
    id: 14,
    type: "color",
    className: "cell-color-pink-teapot",
    gridRow: "3",
    gridColumn: "6",
    modalTag: "Industrial Design",
    title: "Teapot Icon",
    modalDesc: "A modern teapot outline created for a boutique artisanal tea brand. Reflects warmth, hospitality, and custom crafts.",
    icon: (color) => (
      <Apple size={48} strokeWidth={2} color={'#8f3463'} />
    )
  },
  {
    id: 15,
    type: "color",
    className: "cell-color-red-bath",
    gridRow: "3",
    gridColumn: "7",
    modalTag: "Spa Identity",
    title: "Bathtub Icon",
    modalDesc: "Minimalist bath outline design for a luxury wellness spa and body care product retailer. Communicates luxury, steam, and relaxation.",
    icon: (color) => (
      <Box size={48} strokeWidth={2} color={'#ffffffff'} />
    )
  },
  {
    id: 16,
    type: "image",
    className: "",
    gridRow: "4",
    gridColumn: "1",
    title: "Wind Power",
    imgUrl: WindPower,
    modalTag: "Architecture",
    modalDesc: "Brutalist architectural catalog photo capturing scale, concrete texture, and structural geometry.",
    metadata: { client: "Frame Magazine", role: "Contributor", year: "2025" }
  },
  {
    id: 17,
    type: "color",
    className: "cell-color-blue-tie",
    gridRow: "4",
    gridColumn: "2",
    modalTag: "Corporate Brand",
    title: "Tie Icon",
    modalDesc: "Classic business tie icon designed for a men's tailoring boutique and digital personal styling helper.",
    icon: (color) => (
      <Fan size={48} strokeWidth={2} color={'#0e7975ff'} />
    )
  },
  {
    id: 18,
    type: "image",
    className: "span-2x1",
    gridRow: "4",
    gridColumn: "3 / span 2",
    title: "Event",
    imgUrl: Eventimg,
    modalTag: "Brand Platform",
    modalDesc: "Concept design for a mountaineering social platform that helps explorers share wilderness locations, mapping data, and coordinate expeditions in real time.",
    metadata: { client: "Connected Alpine", role: "Lead UI Designer", year: "2025" }
  },
  {
    id: 19,
    type: "color",
    className: "cell-color-beige-cloud",
    gridRow: "4",
    gridColumn: "5",
    modalTag: "Weather System",
    title: "Cloud Icon",
    modalDesc: "Puffy cloud with rain icon designed for an ecological interactive infographic mapping climate changes.",
    icon: (color) => (
      <TicketCheck size={48} strokeWidth={2} color={'#5b5a55'} />
    )
  },
  {
    id: 20,
    type: "image",
    className: "",
    gridRow: "4",
    gridColumn: "6",
    title: "Energy",
    imgUrl: Energy,
    modalTag: "Industrial Tech",
    modalDesc: "B2B branding campaign photo for Intrepid, showing robotics, precision, and automation on high-tech assembly lines.",
    metadata: { client: "Intrepid Systems", role: "Visual Planner", year: "2026" }
  },
  {
    id: 21,
    type: "image",
    className: "",
    gridRow: "4",
    gridColumn: "7",
    title: "Apps Logo",
    imgUrl: Appslogo,
    modalTag: "Exhibition",
    modalDesc: "A moody macro shot of rain reflections on glass. Part of a gallery series on urban isolation and texture.",
    metadata: { client: "Urban Gallery", role: "Exhibitor", year: "2024" }
  }
];

function LogoPage() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleCellClick = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className="logo-page-wrapper">
      <div className="logo-page-header">
        <h1>Build a Brand That Stands Out.</h1>
        <p>
          A great logo is more than a symbol it's the foundation of your brand identity.
        </p>
      </div>

      <div className="logo-grid-container">
        {GRID_ITEMS.map((item) => (
          <div
            key={item.id}
            className={`logo-grid-cell ${item.className || ""}`}
            style={{
              gridRow: item.gridRow,
              gridColumn: item.gridColumn
            }}
            onClick={() => handleCellClick(item)}
          >
            {item.type === "image" ? (
              <>
                <img
                  className="cell-img-bg"
                  src={item.imgUrl}
                  alt={item.title}
                  loading="lazy"
                />
                <div className="cell-text-overlay">
                  <h3>{item.title}</h3>
                </div>
              </>
            ) : (
              <div className="cell-icon-wrapper">
                {item.customContent
                  ? item.customContent()
                  : item.icon && item.icon("inherit")}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Interactive Detail Modal */}
      {/* <div className={`logo-detail-modal ${selectedItem ? "active" : ""}`}>
        <div className="modal-overlay" onClick={closeModal}></div>
        {selectedItem && (
          <div className="modal-content-card">
            <button className="modal-close-btn" onClick={closeModal} aria-label="Close modal">
              &times;
            </button>
            <div className="modal-tag">{selectedItem.modalTag}</div>

            
            <div
              className={`modal-icon-badge ${selectedItem.className || ""}`}
              style={{
                backgroundColor: selectedItem.type === "color" ? undefined : "#1e1530",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden"
              }}
            >
              {selectedItem.type === "image" ? (
                <img
                  src={selectedItem.imgUrl}
                  alt={selectedItem.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              ) : (
                selectedItem.customContent
                  ? selectedItem.customContent()
                  : selectedItem.icon && selectedItem.icon("inherit")
              )}
            </div>

            <h2>{selectedItem.title}</h2>
            <p>{selectedItem.modalDesc}</p>

            {selectedItem.metadata && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                  paddingTop: "20px",
                  fontSize: "0.9rem",
                  color: "rgba(255, 255, 255, 0.5)"
                }}
              >
                <div>
                  <strong>Client:</strong> {selectedItem.metadata.client}
                </div>
                <div>
                  <strong>Role:</strong> {selectedItem.metadata.role}
                </div>
                <div>
                  <strong>Year:</strong> {selectedItem.metadata.year}
                </div>
              </div>
            )}
          </div>
        )}
      </div> */}
    </div>
  );
}

export default LogoPage;
