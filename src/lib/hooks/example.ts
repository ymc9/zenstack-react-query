/* eslint-disable */
import type { Prisma, Example } from "@prisma/client";
import { useContext } from 'react';
import { RequestHandlerContext } from '@zenstackhq/react/runtime';
import * as request from '@zenstackhq/react/runtime/react-query';
import type { UseMutationOptions, UseQueryOptions } from '@tanstack/react-query';

export function useExample() {
    const { endpoint } = useContext(RequestHandlerContext);

    function create<T extends Prisma.ExampleCreateArgs>(options?: Omit<UseMutationOptions<Prisma.CheckSelect<T, Example, Prisma.ExampleGetPayload<T>>, unknown, Prisma.SelectSubset<T, Prisma.ExampleCreateArgs>>, 'mutationFn'>) {
        return request.postMutate<Prisma.SelectSubset<T, Prisma.ExampleCreateArgs>, Prisma.CheckSelect<T, Example, Prisma.ExampleGetPayload<T>>>(`${endpoint}/example/create`, options);
    }

    function findMany<T extends Prisma.ExampleFindManyArgs>(args?: Prisma.SelectSubset<T, Prisma.ExampleFindManyArgs>, options?: UseQueryOptions<Array<Prisma.ExampleGetPayload<T>>>) {
        return request.get<Array<Prisma.ExampleGetPayload<T>>>('Example', `${endpoint}/example/findMany`, args, options);
    }

    function findUnique<T extends Prisma.ExampleFindUniqueArgs>(args: Prisma.SelectSubset<T, Prisma.ExampleFindUniqueArgs>, options?: UseQueryOptions<Prisma.ExampleGetPayload<T>>) {
        return request.get<Prisma.ExampleGetPayload<T>>('Example', `${endpoint}/example/findUnique`, args, options);
    }

    function findFirst<T extends Prisma.ExampleFindFirstArgs>(args: Prisma.SelectSubset<T, Prisma.ExampleFindFirstArgs>, options?: UseQueryOptions<Prisma.ExampleGetPayload<T>>) {
        return request.get<Prisma.ExampleGetPayload<T>>('Example', `${endpoint}/example/findFirst`, args, options);
    }

    function update<T extends Prisma.ExampleUpdateArgs>(options?: Omit<UseMutationOptions<Prisma.ExampleGetPayload<T>, unknown, Prisma.SelectSubset<T, Prisma.ExampleUpdateArgs>>, 'mutationFn'>) {
        return request.putMutate<Prisma.SelectSubset<T, Prisma.ExampleUpdateArgs>, Prisma.ExampleGetPayload<T>>(`${endpoint}/example/update`, options);
    }

    function updateMany<T extends Prisma.ExampleUpdateManyArgs>(options?: Omit<UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.SelectSubset<T, Prisma.ExampleUpdateManyArgs>>, 'mutationFn'>) {
        return request.putMutate<Prisma.SelectSubset<T, Prisma.ExampleUpdateManyArgs>, Prisma.BatchPayload>(`${endpoint}/example/updateMany`, options);
    }

    function upsert<T extends Prisma.ExampleUpsertArgs>(options?: Omit<UseMutationOptions<Prisma.ExampleGetPayload<T>, unknown, Prisma.SelectSubset<T, Prisma.ExampleUpsertArgs>>, 'mutationFn'>) {
        return request.postMutate<Prisma.SelectSubset<T, Prisma.ExampleUpsertArgs>, Prisma.ExampleGetPayload<T>>(`${endpoint}/example/upsert`, options);
    }

    function del<T extends Prisma.ExampleDeleteArgs>(options?: Omit<UseMutationOptions<Prisma.ExampleGetPayload<T>, unknown, Prisma.SelectSubset<T, Prisma.ExampleDeleteArgs>>, 'mutationFn'>) {
        return request.delMutate<Prisma.SelectSubset<T, Prisma.ExampleDeleteArgs>, Prisma.ExampleGetPayload<T>>(`${endpoint}/example/delete`, options);
    }

    function deleteMany<T extends Prisma.ExampleDeleteManyArgs>(options?: Omit<UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.SelectSubset<T, Prisma.ExampleDeleteManyArgs>>, 'mutationFn'>) {
        return request.delMutate<Prisma.SelectSubset<T, Prisma.ExampleDeleteManyArgs>, Prisma.BatchPayload>(`${endpoint}/example/deleteMany`, options);
    }

    function aggregate<T extends Prisma.ExampleAggregateArgs>(args: Prisma.Subset<T, Prisma.ExampleAggregateArgs>, options?: UseQueryOptions<Prisma.GetExampleAggregateType<T>>) {
        return request.get<Prisma.GetExampleAggregateType<T>>('Example', `${endpoint}/example/aggregate`, args, options);
    }

    function groupBy<T extends Prisma.ExampleGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.UserGroupByArgs['orderBy'] } : { orderBy?: Prisma.UserGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.TupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
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
        }[OrderFields]>(args: Prisma.SubsetIntersection<T, Prisma.ExampleGroupByArgs, OrderByArg> & InputErrors, options?: UseQueryOptions<{} extends InputErrors ? Prisma.GetExampleGroupByPayload<T> : InputErrors>) {
        return request.get<{} extends InputErrors ? Prisma.GetExampleGroupByPayload<T> : InputErrors>('Example', `${endpoint}/example/groupBy`, args, options);
    }

    function count<T extends Prisma.ExampleCountArgs>(args: Prisma.Subset<T, Prisma.ExampleCountArgs>, options?: UseQueryOptions<T extends { select: any; } ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Prisma.ExampleCountAggregateOutputType> : number>) {
        return request.get<T extends { select: any; } ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Prisma.ExampleCountAggregateOutputType> : number>('Example', `${endpoint}/example/count`, args, options);
    }
    return { create, findMany, findUnique, findFirst, update, updateMany, upsert, del, deleteMany, aggregate, groupBy, count };
}
