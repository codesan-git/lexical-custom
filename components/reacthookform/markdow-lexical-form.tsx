"use client";

import { MarkdownLexical, MarkdownLexicalAlignPlugin, MarkdownLexicalFormatTextPlugin } from "../ui/markdown-lexical";
import { SubmitHandler, useForm } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

type Inputs = {
    markdownRequired: string
}

/**
 * This element encapsulates a MarkdownLexical component into a react-form-hook usable component.
 * Adding a mandatory name property and an error message, that can be used from within react-form-hook
 */
export default function MarkdownLexicalForm() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center w-full gap-2">
            <MarkdownLexical className="w-full"
                id="markdownRequired"
                textAreaClassName={cn(
                    errors.markdownRequired ? 'border border-solid rounded-sm border-red-600 bg-red-200 dark:bg-red-200' : ''
                )}
                {...register('markdownRequired', { required: true })}
                defaultMarkdownValue={`<div align="center">**asdas**\n\n***asdddppp***\n\n***asd** qweqwewqe     dddssss*</div>`}
            // placeholder={`<div align="center">**asdas**\n\n***asdddppp***\n\n***asd** qweqwewqe     dddssss*</div>}`}
            >
                <MarkdownLexicalFormatTextPlugin />
                <MarkdownLexicalAlignPlugin />

            </MarkdownLexical>
            {errors.markdownRequired && <div className="w-full text-red-600">Markdown textarea is required</div>}
            <Button type="submit">Submit</Button>
        </form>
    );
};
