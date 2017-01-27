#! /usr/bin/env python3
import json

from flask import Flask, request, abort, redirect


app = Flask(__name__)


def tofloat(val):
    """Convert passed variable to float if possible, otherwise return 0."""
    try:
        return float(val)
    except ValueError:
        return 0.0


@app.route('/normaliz/<string:v1>/<string:v2>', methods=['GET'])
def normaliz(v1, v2):
    """Get the hilbert basis for the two passed vectors."""
    v1 = list(map(tofloat, v1.split(',')))[:2]
    v2 = list(map(tofloat, v2.split(',')))[:2]
    # cone = PyNormaliz.NmzCone('cone', [v1, v2])
    # hb = PyNormaliz.NmzResult(cone, 'HilbertBasis')
    return json.dumps([v1, v2])


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)
