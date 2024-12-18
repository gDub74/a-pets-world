"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
    ChartTooltip,
    ChartTooltipContent,
    ChartLegend,
    ChartLegendContent,
} from "@/components/ui/chart";
import { SquareArrowRight } from "lucide-react";

import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { ReactElement } from "react";
import { HeadingTypography } from "../typography/heading";
import { Link } from "../ui/link";
import { InfoTooltip } from "../ui/info-tooltip";

const animalHumaneSocietyPetOwnershipData = [
    { owner: "Animal Shelter/Humane Society", dog: 0.23, cat: 0.31 },
    { owner: "Friends/Relatives", dog: 0.2, cat: 0.28 },
    { owner: "Breeder", dog: 0.34, cat: 0.3 },
    { owner: "Stray", dog: 0.6, cat: 0.27 },
    { owner: "Private Party", dog: 0.12, cat: 0.6 },
    { owner: "Other", dog: 0.32, cat: 0.39 },
];

const chartConfig = {
    dog: {
        label: "Dog",
        color: "hsl(var(--chart-1))",
    },
    cat: {
        label: "Cat",
        color: "hsl(var(--chart-2))",
    },
} satisfies ChartConfig;

export const ASPCAPetStatistics = (): ReactElement => {
    return (
        <article>
            <HeadingTypography>ASPCA Pet Adoption Statistics</HeadingTypography>
            <p className="text-base mb-8">
                The following chart shows the percentage of pet ownership by
                acquisition source from 2019.
                <InfoTooltip>
                    <p className="text-base inline-flex flex-wrap max-w-[500px]">
                        {
                            "According to the APPA, these are the most common sources from which primary methods cats and dogs are obtained as pets (Note: this information was based on a multiple response question, which results in the total % exceeding 100% individually for cats and dogs.  In addition, the ‘other’ category includes all source categories that were reported by <10% of both dog and cat owners)"
                        }

                        <Link
                            href="https://www.aspca.org/helping-people-pets/shelter-intake-and-surrender/pet-statistics"
                            variant="asButton"
                            size="sm"
                            className="ml-auto max-h-fit"
                            target="blank"
                            rel="noopener noreferrer"
                        >
                            ...read more ASPCA
                            <SquareArrowRight size="18" className="ml-1" />
                        </Link>
                    </p>
                </InfoTooltip>
            </p>
            <ChartContainer config={chartConfig} className="w-full">
                <BarChart
                    accessibilityLayer
                    data={animalHumaneSocietyPetOwnershipData}
                >
                    <CartesianGrid vertical={false} />
                    <XAxis
                        dataKey="owner"
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                        tickFormatter={(value) => value[0]}
                    />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <ChartLegend content={<ChartLegendContent />} />
                    <Bar dataKey="dog" fill="var(--color-dog)" radius={4} />
                    <Bar dataKey="cat" fill="var(--color-cat)" radius={4} />
                </BarChart>
            </ChartContainer>
            {/* <div className="my-4 flex">
                <p className="text-l">
                    <Info
                        className="mr-1  inline"
                        fill="hsl(var(--info))"
                        stroke={"hsl(var(--primary-foreground))"}
                    />
                    {
                        "According to the APPA, these are the most common sources from which primary methods cats and dogs are obtained as pets (Note: this information was based on a multiple response question, which results in the total % exceeding 100% individually for cats and dogs.  In addition, the ‘other’ category includes all source categories that were reported by <10% of both dog and cat owners)"
                    }
                    <span className="ml-2">
                        <Link
                            href="https://www.aspca.org/helping-people-pets/shelter-intake-and-surrender/pet-statistics"
                            variant="asButton"
                            size="sm"
                            className="ml-2 max-h-fit"
                        >
                            ...read more ASPCA
                            <SquareArrowRight size="18" className="ml-1" />
                        </Link>
                    </span>
                </p>
            </div> */}
        </article>
    );
};
