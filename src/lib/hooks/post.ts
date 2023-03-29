/* eslint-disable */
import type { Prisma, Post } from "@prisma/client";
import { useContext } from 'react';
import { RequestHandlerContext } from '@zenstackhq/react/runtime';
import * as request from '@zenstackhq/react/runtime/react-query';
import type { UseMutationOptions, UseQueryOptions } from '@tanstack/react-query';

export function usePost() {
    const { endpoint } = useContext(RequestHandlerContext);

    function create<T extends Prisma.PostCreateArgs>(options?: Omit<UseMutationOptions<Prisma.CheckSelect<T, Post, Prisma.PostGetPayload<T>>, unknown, Prisma.SelectSubset<T, Prisma.PostCreateArgs>>, 'mutationFn'>) {
        return request.postMutate<Prisma.SelectSubset<T, Prisma.PostCreateArgs>, Prisma.CheckSelect<T, Post, Prisma.PostGetPayload<T>>>(`${endpoint}/post/create`, options);
    }

    function findMany<T extends Prisma.PostFindManyArgs>(args?: Prisma.SelectSubset<T, Prisma.PostFindManyArgs>, options?: UseQueryOptions<Array<Prisma.PostGetPayload<T>>>) {
        return request.get<Array<Prisma.PostGetPayload<T>>>('Post', `${endpoint}/post/findMany`, args, options);
    }

    function findUnique<T extends Prisma.PostFindUniqueArgs>(args: Prisma.SelectSubset<T, Prisma.PostFindUniqueArgs>, options?: UseQueryOptions<Prisma.PostGetPayload<T>>) {
        return request.get<Prisma.PostGetPayload<T>>('Post', `${endpoint}/post/findUnique`, args, options);
    }

    function findFirst<T extends Prisma.PostFindFirstArgs>(args: Prisma.SelectSubset<T, Prisma.PostFindFirstArgs>, options?: UseQueryOptions<Prisma.PostGetPayload<T>>) {
        return request.get<Prisma.PostGetPayload<T>>('Post', `${endpoint}/post/findFirst`, args, options);
    }

    function update<T extends Prisma.PostUpdateArgs>(options?: Omit<UseMutationOptions<Prisma.PostGetPayload<T>, unknown, Prisma.SelectSubset<T, Prisma.PostUpdateArgs>>, 'mutationFn'>) {
        return request.putMutate<Prisma.SelectSubset<T, Prisma.PostUpdateArgs>, Prisma.PostGetPayload<T>>(`${endpoint}/post/update`, options);
    }

    function updateMany<T extends Prisma.PostUpdateManyArgs>(options?: Omit<UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.SelectSubset<T, Prisma.PostUpdateManyArgs>>, 'mutationFn'>) {
        return request.putMutate<Prisma.SelectSubset<T, Prisma.PostUpdateManyArgs>, Prisma.BatchPayload>(`${endpoint}/post/updateMany`, options);
    }

    function upsert<T extends Prisma.PostUpsertArgs>(options?: Omit<UseMutationOptions<Prisma.PostGetPayload<T>, unknown, Prisma.SelectSubset<T, Prisma.PostUpsertArgs>>, 'mutationFn'>) {
        return request.postMutate<Prisma.SelectSubset<T, Prisma.PostUpsertArgs>, Prisma.PostGetPayload<T>>(`${endpoint}/post/upsert`, options);
    }

    function del<T extends Prisma.PostDeleteArgs>(options?: Omit<UseMutationOptions<Prisma.PostGetPayload<T>, unknown, Prisma.SelectSubset<T, Prisma.PostDeleteArgs>>, 'mutationFn'>) {
        return request.delMutate<Prisma.SelectSubset<T, Prisma.PostDeleteArgs>, Prisma.PostGetPayload<T>>(`${endpoint}/post/delete`, options);
    }

    function deleteMany<T extends Prisma.PostDeleteManyArgs>(options?: Omit<UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.SelectSubset<T, Prisma.PostDeleteManyArgs>>, 'mutationFn'>) {
        return request.delMutate<Prisma.SelectSubset<T, Prisma.PostDeleteManyArgs>, Prisma.BatchPayload>(`${endpoint}/post/deleteMany`, options);
    }

    function aggregate<T extends Prisma.PostAggregateArgs>(args: Prisma.Subset<T, Prisma.PostAggregateArgs>, options?: UseQueryOptions<Prisma.GetPostAggregateType<T>>) {
        return request.get<Prisma.GetPostAggregateType<T>>('Post', `${endpoint}/post/aggregate`, args, options);
    }

    function groupBy<T extends Prisma.PostGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.UserGroupByArgs['orderBy'] } : { orderBy?: Prisma.UserGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.TupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
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
        }[OrderFields]>(args: Prisma.SubsetIntersection<T, Prisma.PostGroupByArgs, OrderByArg> & InputErrors, options?: UseQueryOptions<{} extends InputErrors ? Prisma.GetPostGroupByPayload<T> : InputErrors>) {
        return request.get<{} extends InputErrors ? Prisma.GetPostGroupByPayload<T> : InputErrors>('Post', `${endpoint}/post/groupBy`, args, options);
    }

    function count<T extends Prisma.PostCountArgs>(args: Prisma.Subset<T, Prisma.PostCountArgs>, options?: UseQueryOptions<T extends { select: any; } ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Prisma.PostCountAggregateOutputType> : number>) {
        return request.get<T extends { select: any; } ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Prisma.PostCountAggregateOutputType> : number>('Post', `${endpoint}/post/count`, args, options);
    }
    return { create, findMany, findUnique, findFirst, update, updateMany, upsert, del, deleteMany, aggregate, groupBy, count };
}
