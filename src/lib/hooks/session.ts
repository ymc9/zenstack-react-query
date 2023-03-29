/* eslint-disable */
import type { Prisma, Session } from "@prisma/client";
import { useContext } from 'react';
import { RequestHandlerContext } from '@zenstackhq/react/runtime';
import * as request from '@zenstackhq/react/runtime/react-query';
import type { UseMutationOptions, UseQueryOptions } from '@tanstack/react-query';

export function useSession() {
    const { endpoint } = useContext(RequestHandlerContext);

    function create<T extends Prisma.SessionCreateArgs>(options?: Omit<UseMutationOptions<Prisma.CheckSelect<T, Session, Prisma.SessionGetPayload<T>>, unknown, Prisma.SelectSubset<T, Prisma.SessionCreateArgs>>, 'mutationFn'>) {
        return request.postMutate<Prisma.SelectSubset<T, Prisma.SessionCreateArgs>, Prisma.CheckSelect<T, Session, Prisma.SessionGetPayload<T>>>(`${endpoint}/session/create`, options);
    }

    function findMany<T extends Prisma.SessionFindManyArgs>(args?: Prisma.SelectSubset<T, Prisma.SessionFindManyArgs>, options?: UseQueryOptions<Array<Prisma.SessionGetPayload<T>>>) {
        return request.get<Array<Prisma.SessionGetPayload<T>>>('Session', `${endpoint}/session/findMany`, args, options);
    }

    function findUnique<T extends Prisma.SessionFindUniqueArgs>(args: Prisma.SelectSubset<T, Prisma.SessionFindUniqueArgs>, options?: UseQueryOptions<Prisma.SessionGetPayload<T>>) {
        return request.get<Prisma.SessionGetPayload<T>>('Session', `${endpoint}/session/findUnique`, args, options);
    }

    function findFirst<T extends Prisma.SessionFindFirstArgs>(args: Prisma.SelectSubset<T, Prisma.SessionFindFirstArgs>, options?: UseQueryOptions<Prisma.SessionGetPayload<T>>) {
        return request.get<Prisma.SessionGetPayload<T>>('Session', `${endpoint}/session/findFirst`, args, options);
    }

    function update<T extends Prisma.SessionUpdateArgs>(options?: Omit<UseMutationOptions<Prisma.SessionGetPayload<T>, unknown, Prisma.SelectSubset<T, Prisma.SessionUpdateArgs>>, 'mutationFn'>) {
        return request.putMutate<Prisma.SelectSubset<T, Prisma.SessionUpdateArgs>, Prisma.SessionGetPayload<T>>(`${endpoint}/session/update`, options);
    }

    function updateMany<T extends Prisma.SessionUpdateManyArgs>(options?: Omit<UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.SelectSubset<T, Prisma.SessionUpdateManyArgs>>, 'mutationFn'>) {
        return request.putMutate<Prisma.SelectSubset<T, Prisma.SessionUpdateManyArgs>, Prisma.BatchPayload>(`${endpoint}/session/updateMany`, options);
    }

    function upsert<T extends Prisma.SessionUpsertArgs>(options?: Omit<UseMutationOptions<Prisma.SessionGetPayload<T>, unknown, Prisma.SelectSubset<T, Prisma.SessionUpsertArgs>>, 'mutationFn'>) {
        return request.postMutate<Prisma.SelectSubset<T, Prisma.SessionUpsertArgs>, Prisma.SessionGetPayload<T>>(`${endpoint}/session/upsert`, options);
    }

    function del<T extends Prisma.SessionDeleteArgs>(options?: Omit<UseMutationOptions<Prisma.SessionGetPayload<T>, unknown, Prisma.SelectSubset<T, Prisma.SessionDeleteArgs>>, 'mutationFn'>) {
        return request.delMutate<Prisma.SelectSubset<T, Prisma.SessionDeleteArgs>, Prisma.SessionGetPayload<T>>(`${endpoint}/session/delete`, options);
    }

    function deleteMany<T extends Prisma.SessionDeleteManyArgs>(options?: Omit<UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.SelectSubset<T, Prisma.SessionDeleteManyArgs>>, 'mutationFn'>) {
        return request.delMutate<Prisma.SelectSubset<T, Prisma.SessionDeleteManyArgs>, Prisma.BatchPayload>(`${endpoint}/session/deleteMany`, options);
    }

    function aggregate<T extends Prisma.SessionAggregateArgs>(args: Prisma.Subset<T, Prisma.SessionAggregateArgs>, options?: UseQueryOptions<Prisma.GetSessionAggregateType<T>>) {
        return request.get<Prisma.GetSessionAggregateType<T>>('Session', `${endpoint}/session/aggregate`, args, options);
    }

    function groupBy<T extends Prisma.SessionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.UserGroupByArgs['orderBy'] } : { orderBy?: Prisma.UserGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.TupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
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
        }[OrderFields]>(args: Prisma.SubsetIntersection<T, Prisma.SessionGroupByArgs, OrderByArg> & InputErrors, options?: UseQueryOptions<{} extends InputErrors ? Prisma.GetSessionGroupByPayload<T> : InputErrors>) {
        return request.get<{} extends InputErrors ? Prisma.GetSessionGroupByPayload<T> : InputErrors>('Session', `${endpoint}/session/groupBy`, args, options);
    }

    function count<T extends Prisma.SessionCountArgs>(args: Prisma.Subset<T, Prisma.SessionCountArgs>, options?: UseQueryOptions<T extends { select: any; } ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Prisma.SessionCountAggregateOutputType> : number>) {
        return request.get<T extends { select: any; } ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Prisma.SessionCountAggregateOutputType> : number>('Session', `${endpoint}/session/count`, args, options);
    }
    return { create, findMany, findUnique, findFirst, update, updateMany, upsert, del, deleteMany, aggregate, groupBy, count };
}
