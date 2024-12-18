"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
    ChartTooltip,
    ChartTooltipContent,
    ChartLegend,
    ChartLegendContent,
} from "@/components/ui/chart";
import { Info, SquareArrowRight } from "lucide-react";

import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { ReactElement } from "react";
import { HeadingTypography } from "../typography/heading";
import { Link } from "../ui/link";

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
        <>
            <HeadingTypography>ASPCA Pet Adoption Statistics</HeadingTypography>
            <p className="text-base mb-8">
                The following chart shows the percentage of pet ownership by
                acquisition source from 2019.
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
                        tickFormatter={(value) => value}
                    />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <ChartLegend content={<ChartLegendContent />} />
                    <Bar dataKey="dog" fill="var(--color-dog)" radius={4} />
                    <Bar dataKey="cat" fill="var(--color-cat)" radius={4} />
                </BarChart>
            </ChartContainer>
            <article className="my-4 flex">
                <p className="text-l">
                    <Info
                        size="20"
                        className="mr-1 mb-[0.25rem] inline"
                        fill="hsl(var(--info))"
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
                            ASPCA
                            <SquareArrowRight size="18" className="ml-2" />
                        </Link>
                    </span>
                </p>
            </article>
        </>
    );
};