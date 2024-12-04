import styled from "styled-components";
import Image from "next/image";
import { GridMain, GridItem } from "@/styles/grid";
import EmblaCarousel from "@/components/ImageCarousel/ImageCarousel";
import {images} from "@/lib/data-images";

export default function GraphicPortfolio() {
    return (
        <GridMain>
        <GridItem $colSpan="1 / span 4" $colSpanMd="1 / span 10" $rowSpan="1" $rowSpanMd="1 / span 2">
        <EmblaCarousel images={images}>
        </EmblaCarousel>
        </GridItem>
        </GridMain>
    );
}