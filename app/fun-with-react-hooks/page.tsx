import { PreviousStateExampleWithUseActionState } from "@/hooks/usage-examples/previous-state-with-use-action-state";
import { Separator } from "@/components/ui/separator";
import { HeadingTypography } from "@/components/ui/typography/heading";

export default function Favorites() {
    return (
        <>
            <HeadingTypography>
                Trying out some newer React Hooks along with some custom hooks:
            </HeadingTypography>
            <Separator />
            <div className="my-20">
                <HeadingTypography variant="h2" className="mt-8">
                    usePrevious custom hook with useActionState:
                </HeadingTypography>
                <PreviousStateExampleWithUseActionState />
            </div>
        </>
    );
}
