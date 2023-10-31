import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Divider } from "@mui/material";
import { keyframes } from "@mui/system";
import VanillaTilt from "vanilla-tilt"; // Importe a biblioteca VanillaTilt
import { useEffect, useRef, useState } from "react";
import "./PokemonCard.css";

export default function PokemonCard({ name, image, types }) {
  const typeHandler = () => {
    if (types[1]) {
      return types[0].type.name + " | " + types[1].type.name;
    }
    return types[0].type.name;
  };

  const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

  const cardRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const typeRef = useRef(null);
  const divRef = useRef(null);

  const [isHovered, setIsHovered] = useState(false);
  const [dividerHovered, setDividerHovered] = useState(false);

  useEffect(() => {
    // Inicialize o VanillaTilt no elemento do cartão
    VanillaTilt.init(cardRef.current, {
      max: 25,
      speed: 600,
      glare: true,
      "max-glare": 1.3,
    });

    VanillaTilt.init(divRef.current, {
      max: 25,
      speed: 600,
      glare: true,
      "max-glare": 1.3,
    });

    // Inicialize o VanillaTilt na imagem
    VanillaTilt.init(imageRef.current, {
      max: 25, // Ajuste o valor máximo para o efeito 3D
      speed: 600,
      glare: false,
      "max-glare": 2,
    });

    VanillaTilt.init(textRef.current, {
      max: 25, // Ajuste o valor máximo para o efeito 3D
      speed: 800,
      glare: false,
      "max-glare": 2,
    });

    VanillaTilt.init(typeRef.current, {
      max: 25, // Ajuste o valor máximo para o efeito 3D
      speed: 700,
      glare: false,
      "max-glare": 2,
    });
  }, []);

  return (
    <Card
      ref={cardRef}
      sx={{
        maxWidth: 345,
        border: "2px solid black",
        transition: "transform 0.2s",
        "&:hover": {
          border: "2px solid white",
          backgroundColor: "#f1af09",
          boxShadow: "0px 0px 8px 0px black",
        },
        "&:active": {
          transform: "scale(1)",
          backgroundColor: "#00FFC1",
          animation: `${pulse} 0.5s ease-in-out`,
        },
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="pokemon-card"
    >
      <CardActionArea>
        {isHovered && (
          <div
            className="div"
            style={{
              display: "flex",
              flexDirection: "column",
              position: "absolute",
              justifyContent: "center",
              alignItems: "center",
              width: "90%",
              height: "54%",
              backgroundColor: "#00796B",
              backgroundSize: "cover",
              opacity: 1,
              borderRadius: "800px",
              marginLeft: "4.5%",
              marginTop: "13.5%",
              boxShadow: "3px 3px 3px 3px black",
            }}
            onMouseEnter={() => setDividerHovered(true)}
            onMouseLeave={() => setDividerHovered(false)}
          ></div>
        )}
        <CardMedia
          ref={imageRef}
          component="img"
          height="250"
          image={image}
          alt="pokemon os brabo"
          onMouseEnter={() => setDividerHovered(true)}
          onMouseLeave={() => setDividerHovered(false)}
        />
        <CardContent>
          <Divider
            className="divider"
            style={{
              opacity: dividerHovered ? "100%" : "", // Cor de fundo quando houver hover
            }}
          ></Divider>

          <Divider
            className="divider"
            style={{
              opacity: dividerHovered ? "100%" : "", // Cor de fundo quando houver hover
            }}
          >
            What's that pokemon?
          </Divider>
          <Divider
            className="divider"
            style={{
              opacity: dividerHovered ? "100%" : "", // Cor de fundo quando houver hover
            }}
          ></Divider>
          <Typography
            gutterBottom
            variant="h4"
            align="center"
            marginTop="2px"
            component="div"
            fontWeight="bold"
            className="name"
          >
            {name}
          </Typography>
          <Typography
            gutterBottom
            variant="h6"
            align="center"
            component="div"
            className="type"
          >
            {typeHandler()}
          </Typography>
          <Divider></Divider>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
