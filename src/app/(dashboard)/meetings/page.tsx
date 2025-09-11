import { Suspense } from "react";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { ErrorBoundary } from "react-error-boundary";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { SearchParams } from "nuqs/server";

import {
    MeetingsView, 
    MeetingsViewError, 
    MeetingsViewLoading 
} from "@/modules/meetings/ui/views/meetings-view";


import { getQueryClient, trpc } from "@/trpc/server";
import { MeetingsListHeader } from "@/modules/meetings/ui/components/meetings-list-header";
import { loadSearchparams } from "@/modules/meetings/params";

interface Props {
    searchParams: Promise<SearchParams>;
}

const Page = async ({ searchParams }: Props) => {
    const filters = await loadSearchparams(searchParams);

    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session) {
        redirect("/sign-in");
    }

    const queryClient = getQueryClient();
    void queryClient.prefetchQuery(
        trpc.meetings.getMany.queryOptions({
            ...filters,
        })
    );

    return (
        <>
            <MeetingsListHeader />
            <HydrationBoundary state={dehydrate(queryClient)}>
                <Suspense fallback={<MeetingsViewLoading />}>
                    <ErrorBoundary fallback={<MeetingsViewError />}>
                        <MeetingsView />
                    </ErrorBoundary>
                </Suspense>
            </HydrationBoundary>
        </>
    );
};

export default Page;