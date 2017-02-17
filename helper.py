# Calculate Hilbert basis for all combinations of vectors (0-n).
from __future__ import print_function

import PyNormaliz
import itertools
import json

def hilbertBases(n, save=False):
    start_list = [range(0,n), range(0,n)]
    vectors = list(itertools.product(*start_list))
    vectors = [[x[0],x[1]] for x in vectors]
    vectors = [list(x) for x in list(itertools.product(vectors,vectors))]
    bases = {}
    for pair in vectors:    
        cone = PyNormaliz.NmzCone("cone", pair)
        HB = PyNormaliz.NmzResult(cone,"HilbertBasis")
        pair = str(pair[0]) + ',' + str(pair[1])
        bases[pair] = HB
        if save:
            with open('bases.json','w') as fp:
                json.dump(bases, fp)
    return bases
