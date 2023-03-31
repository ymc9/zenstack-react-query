/* eslint-disable */
import type { Prisma, Example } from "@prisma/client";
import { useContext } from 'react';
import { RequestHandlerContext } from '@zenstackhq/react/runtime';
import * as request from '@zenstackhq/react/runtime/react-query';
import type { UseMutationOptions, UseQueryOptions } from '@tanstack/react-query';

export function useCreateExample(options?: Omit<UseMutationOptions<Example, unknown, Prisma.ExampleCreateArgs>, 'mutationFn'>, invalidateQueries: boolean = true) {
    const { endpoint } = useContext(RequestHandlerContext);
    const _mutation =
        request.postMutation<Prisma.ExampleCreateArgs, Example>('Example', `${endpoint}/example/create`, options, invalidateQueries)
        ;
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.ExampleCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.ExampleCreateArgs>,
            options?: Omit<UseMutationOptions<Prisma.CheckSelect<T, Example, Prisma.ExampleGetPayload<T>>, unknown, Prisma.SelectSubset<T, Prisma.ExampleCreateArgs>>, 'mutationFn'>
        ) {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.CheckSelect<T, Example, Prisma.ExampleGetPayload<T>>;
        },
    };
    return mutation;
}

export function useCreateManyExample(options?: Omit<UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.ExampleCreateManyArgs>, 'mutationFn'>, invalidateQueries: boolean = true) {
    const { endpoint } = useContext(RequestHandlerContext);
    const _mutation =
        request.postMutation<Prisma.ExampleCreateManyArgs, Prisma.BatchPayload>('Example', `${endpoint}/example/createMany`, options, invalidateQueries)
        ;
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.ExampleCreateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.ExampleCreateManyArgs>,
            options?: Omit<UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.SelectSubset<T, Prisma.ExampleCreateManyArgs>>, 'mutationFn'>
        ) {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useFindManyExample<T extends Prisma.ExampleFindManyArgs>(args?: Prisma.SelectSubset<T, Prisma.ExampleFindManyArgs>, options?: UseQueryOptions<Array<Prisma.ExampleGetPayload<T>>>) {
    const { endpoint } = useContext(RequestHandlerContext);
    return request.query<Array<Prisma.ExampleGetPayload<T>>>('Example', `${endpoint}/example/findMany`, args, options);
}

export function useFindUniqueExample<T extends Prisma.ExampleFindUniqueArgs>(args: Prisma.SelectSubset<T, Prisma.ExampleFindUniqueArgs>, options?: UseQueryOptions<Prisma.ExampleGetPayload<T>>) {
    const { endpoint } = useContext(RequestHandlerContext);
    return request.query<Prisma.ExampleGetPayload<T>>('Example', `${endpoint}/example/findUnique`, args, options);
}

export function useFindFirstExample<T extends Prisma.ExampleFindFirstArgs>(args?: Prisma.SelectSubset<T, Prisma.ExampleFindFirstArgs>, options?: UseQueryOptions<Prisma.ExampleGetPayload<T>>) {
    const { endpoint } = useContext(RequestHandlerContext);
    return request.query<Prisma.ExampleGetPayload<T>>('Example', `${endpoint}/example/findFirst`, args, options);
}

export function useUpdateExample(options?: Omit<UseMutationOptions<Example, unknown, Prisma.ExampleUpdateArgs>, 'mutationFn'>, invalidateQueries: boolean = true) {
    const { endpoint } = useContext(RequestHandlerContext);
    const _mutation =
        request.putMutation<Prisma.ExampleUpdateArgs, Example>('Example', `${endpoint}/example/update`, options, invalidateQueries)
        ;
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.ExampleUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.ExampleUpdateArgs>,
            options?: Omit<UseMutationOptions<Prisma.CheckSelect<T, Example, Prisma.ExampleGetPayload<T>>, unknown, Prisma.SelectSubset<T, Prisma.ExampleUpdateArgs>>, 'mutationFn'>
        ) {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.CheckSelect<T, Example, Prisma.ExampleGetPayload<T>>;
        },
    };
    return mutation;
}

export function useUpdateManyExample(options?: Omit<UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.ExampleUpdateManyArgs>, 'mutationFn'>, invalidateQueries: boolean = true) {
    const { endpoint } = useContext(RequestHandlerContext);
    const _mutation =
        request.putMutation<Prisma.ExampleUpdateManyArgs, Prisma.BatchPayload>('Example', `${endpoint}/example/updateMany`, options, invalidateQueries)
        ;
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.ExampleUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.ExampleUpdateManyArgs>,
            options?: Omit<UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.SelectSubset<T, Prisma.ExampleUpdateManyArgs>>, 'mutationFn'>
        ) {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useUpsertExample(options?: Omit<UseMutationOptions<Example, unknown, Prisma.ExampleUpsertArgs>, 'mutationFn'>, invalidateQueries: boolean = true) {
    const { endpoint } = useContext(RequestHandlerContext);
    const _mutation =
        request.postMutation<Prisma.ExampleUpsertArgs, Example>('Example', `${endpoint}/example/upsert`, options, invalidateQueries)
        ;
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.ExampleUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.ExampleUpsertArgs>,
            options?: Omit<UseMutationOptions<Prisma.CheckSelect<T, Example, Prisma.ExampleGetPayload<T>>, unknown, Prisma.SelectSubset<T, Prisma.ExampleUpsertArgs>>, 'mutationFn'>
        ) {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.CheckSelect<T, Example, Prisma.ExampleGetPayload<T>>;
        },
    };
    return mutation;
}

export function useDeleteExample(options?: Omit<UseMutationOptions<Example, unknown, Prisma.ExampleDeleteArgs>, 'mutationFn'>, invalidateQueries: boolean = true) {
    const { endpoint } = useContext(RequestHandlerContext);
    const _mutation =
        request.deleteMutation<Prisma.ExampleDeleteArgs, Example>('Example', `${endpoint}/example/delete`, options, invalidateQueries)
        ;
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.ExampleDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.ExampleDeleteArgs>,
            options?: Omit<UseMutationOptions<Prisma.CheckSelect<T, Example, Prisma.ExampleGetPayload<T>>, unknown, Prisma.SelectSubset<T, Prisma.ExampleDeleteArgs>>, 'mutationFn'>
        ) {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.CheckSelect<T, Example, Prisma.ExampleGetPayload<T>>;
        },
    };
    return mutation;
}

export function useDeleteManyExample(options?: Omit<UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.ExampleDeleteManyArgs>, 'mutationFn'>, invalidateQueries: boolean = true) {
    const { endpoint } = useContext(RequestHandlerContext);
    const _mutation =
        request.deleteMutation<Prisma.ExampleDeleteManyArgs, Prisma.BatchPayload>('Example', `${endpoint}/example/deleteMany`, options, invalidateQueries)
        ;
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.ExampleDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.ExampleDeleteManyArgs>,
            options?: Omit<UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.SelectSubset<T, Prisma.ExampleDeleteManyArgs>>, 'mutationFn'>
        ) {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useAggregateExample<T extends Prisma.ExampleAggregateArgs>(args: Prisma.SelectSubset<T, Prisma.ExampleAggregateArgs>, options?: UseQueryOptions<Prisma.GetExampleAggregateType<T>>) {
    const { endpoint } = useContext(RequestHandlerContext);
    return request.query<Prisma.GetExampleAggregateType<T>>('Example', `${endpoint}/example/aggregate`, args, options);
}

export function useGroupByExample<T extends Prisma.ExampleGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.UserGroupByArgs['orderBy'] } : { orderBy?: Prisma.UserGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.TupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
    ? `Error: "by" must not be empty.`
    : HavingValid extends Prisma.False
    ? {
        [P in HavingFields]: P extends ByFields
        ? never
        : P extends string
        ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
        : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`,
        ]
    }[HavingFields]
    : 'take' extends Prisma.Keys<T>
    ? 'orderBy' extends Prisma.Keys<T>
    ? ByValid extends Prisma.True
    ? {}
    : {
        [P in OrderFields]: P extends ByFields
        ? never
        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
    }[OrderFields]
    : 'Error: If you provide "take", you also need to provide "orderBy"'
    : 'skip' extends Prisma.Keys<T>
    ? 'orderBy' extends Prisma.Keys<T>
    ? ByValid extends Prisma.True
    ? {}
    : {
        [P in OrderFields]: P extends ByFields
        ? never
        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
    }[OrderFields]
    : 'Error: If you provide "skip", you also need to provide "orderBy"'
    : ByValid extends Prisma.True
    ? {}
    : {
        [P in OrderFields]: P extends ByFields
        ? never
        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
    }[OrderFields]>(args: Prisma.SelectSubset<T, Prisma.SubsetIntersection<T, Prisma.ExampleGroupByArgs, OrderByArg> & InputErrors>, options?: UseQueryOptions<{} extends InputErrors ? Prisma.GetExampleGroupByPayload<T> : InputErrors>) {
    const { endpoint } = useContext(RequestHandlerContext);
    return request.query<{} extends InputErrors ? Prisma.GetExampleGroupByPayload<T> : InputErrors>('Example', `${endpoint}/example/groupBy`, args, options);
}

export function useCountExample<T extends Prisma.ExampleCountArgs>(args?: Prisma.SelectSubset<T, Prisma.ExampleCountArgs>, options?: UseQueryOptions<T extends { select: any; } ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Prisma.ExampleCountAggregateOutputType> : number>) {
    const { endpoint } = useContext(RequestHandlerContext);
    return request.query<T extends { select: any; } ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Prisma.ExampleCountAggregateOutputType> : number>('Example', `${endpoint}/example/count`, args, options);
}
