/* eslint-disable */
import type { Prisma, VerificationToken } from "@prisma/client";
import { useContext } from 'react';
import { RequestHandlerContext } from '@zenstackhq/react/runtime';
import * as request from '@zenstackhq/react/runtime/react-query';
import type { UseMutationOptions, UseQueryOptions } from '@tanstack/react-query';

export function useVerificationToken() {
    const { endpoint } = useContext(RequestHandlerContext);

    function create<T extends Prisma.VerificationTokenCreateArgs>(options?: Omit<UseMutationOptions<Prisma.CheckSelect<T, VerificationToken, Prisma.VerificationTokenGetPayload<T>>, unknown, Prisma.SelectSubset<T, Prisma.VerificationTokenCreateArgs>>, 'mutationFn'>) {
        return request.postMutate<Prisma.SelectSubset<T, Prisma.VerificationTokenCreateArgs>, Prisma.CheckSelect<T, VerificationToken, Prisma.VerificationTokenGetPayload<T>>>(`${endpoint}/verificationToken/create`, options);
    }

    function findMany<T extends Prisma.VerificationTokenFindManyArgs>(args?: Prisma.SelectSubset<T, Prisma.VerificationTokenFindManyArgs>, options?: UseQueryOptions<Array<Prisma.VerificationTokenGetPayload<T>>>) {
        return request.get<Array<Prisma.VerificationTokenGetPayload<T>>>('VerificationToken', `${endpoint}/verificationToken/findMany`, args, options);
    }

    function findUnique<T extends Prisma.VerificationTokenFindUniqueArgs>(args: Prisma.SelectSubset<T, Prisma.VerificationTokenFindUniqueArgs>, options?: UseQueryOptions<Prisma.VerificationTokenGetPayload<T>>) {
        return request.get<Prisma.VerificationTokenGetPayload<T>>('VerificationToken', `${endpoint}/verificationToken/findUnique`, args, options);
    }

    function findFirst<T extends Prisma.VerificationTokenFindFirstArgs>(args: Prisma.SelectSubset<T, Prisma.VerificationTokenFindFirstArgs>, options?: UseQueryOptions<Prisma.VerificationTokenGetPayload<T>>) {
        return request.get<Prisma.VerificationTokenGetPayload<T>>('VerificationToken', `${endpoint}/verificationToken/findFirst`, args, options);
    }

    function update<T extends Prisma.VerificationTokenUpdateArgs>(options?: Omit<UseMutationOptions<Prisma.VerificationTokenGetPayload<T>, unknown, Prisma.SelectSubset<T, Prisma.VerificationTokenUpdateArgs>>, 'mutationFn'>) {
        return request.putMutate<Prisma.SelectSubset<T, Prisma.VerificationTokenUpdateArgs>, Prisma.VerificationTokenGetPayload<T>>(`${endpoint}/verificationToken/update`, options);
    }

    function updateMany<T extends Prisma.VerificationTokenUpdateManyArgs>(options?: Omit<UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.SelectSubset<T, Prisma.VerificationTokenUpdateManyArgs>>, 'mutationFn'>) {
        return request.putMutate<Prisma.SelectSubset<T, Prisma.VerificationTokenUpdateManyArgs>, Prisma.BatchPayload>(`${endpoint}/verificationToken/updateMany`, options);
    }

    function upsert<T extends Prisma.VerificationTokenUpsertArgs>(options?: Omit<UseMutationOptions<Prisma.VerificationTokenGetPayload<T>, unknown, Prisma.SelectSubset<T, Prisma.VerificationTokenUpsertArgs>>, 'mutationFn'>) {
        return request.postMutate<Prisma.SelectSubset<T, Prisma.VerificationTokenUpsertArgs>, Prisma.VerificationTokenGetPayload<T>>(`${endpoint}/verificationToken/upsert`, options);
    }

    function del<T extends Prisma.VerificationTokenDeleteArgs>(options?: Omit<UseMutationOptions<Prisma.VerificationTokenGetPayload<T>, unknown, Prisma.SelectSubset<T, Prisma.VerificationTokenDeleteArgs>>, 'mutationFn'>) {
        return request.delMutate<Prisma.SelectSubset<T, Prisma.VerificationTokenDeleteArgs>, Prisma.VerificationTokenGetPayload<T>>(`${endpoint}/verificationToken/delete`, options);
    }

    function deleteMany<T extends Prisma.VerificationTokenDeleteManyArgs>(options?: Omit<UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.SelectSubset<T, Prisma.VerificationTokenDeleteManyArgs>>, 'mutationFn'>) {
        return request.delMutate<Prisma.SelectSubset<T, Prisma.VerificationTokenDeleteManyArgs>, Prisma.BatchPayload>(`${endpoint}/verificationToken/deleteMany`, options);
    }

    function aggregate<T extends Prisma.VerificationTokenAggregateArgs>(args: Prisma.Subset<T, Prisma.VerificationTokenAggregateArgs>, options?: UseQueryOptions<Prisma.GetVerificationTokenAggregateType<T>>) {
        return request.get<Prisma.GetVerificationTokenAggregateType<T>>('VerificationToken', `${endpoint}/verificationToken/aggregate`, args, options);
    }

    function groupBy<T extends Prisma.VerificationTokenGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.UserGroupByArgs['orderBy'] } : { orderBy?: Prisma.UserGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.TupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
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
        }[OrderFields]>(args: Prisma.SubsetIntersection<T, Prisma.VerificationTokenGroupByArgs, OrderByArg> & InputErrors, options?: UseQueryOptions<{} extends InputErrors ? Prisma.GetVerificationTokenGroupByPayload<T> : InputErrors>) {
        return request.get<{} extends InputErrors ? Prisma.GetVerificationTokenGroupByPayload<T> : InputErrors>('VerificationToken', `${endpoint}/verificationToken/groupBy`, args, options);
    }

    function count<T extends Prisma.VerificationTokenCountArgs>(args: Prisma.Subset<T, Prisma.VerificationTokenCountArgs>, options?: UseQueryOptions<T extends { select: any; } ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Prisma.VerificationTokenCountAggregateOutputType> : number>) {
        return request.get<T extends { select: any; } ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Prisma.VerificationTokenCountAggregateOutputType> : number>('VerificationToken', `${endpoint}/verificationToken/count`, args, options);
    }
    return { create, findMany, findUnique, findFirst, update, updateMany, upsert, del, deleteMany, aggregate, groupBy, count };
}
