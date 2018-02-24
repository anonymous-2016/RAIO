if (typeof JSON !== "object") {
    JSON = {}
}
(function () {
    var E = /^[\],:{}\s]*$/;
    var J = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;
    var M = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
    var F = /(?:^|:|,)(?:\s*\[)+/g;
    var H = /[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
    var A = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
    function L(O) {
        return O < 10
            ? "0" + O
            : O
    }
    function G() {
        return this.valueOf()
    }
    if (typeof Date.prototype.toJSON !== "function") {
        Date.prototype.toJSON = function () {
            return isFinite(this.valueOf())
                ? this.getUTCFullYear() + "-" + L(this.getUTCMonth() + 1) + "-" + L(this.getUTCDate()) + "T" + L(this.getUTCHours()) + ":" + L(this.getUTCMinutes()) + ":" + L(this.getUTCSeconds()) + "Z"
                : null
        };
        Boolean.prototype.toJSON = G;
        Number.prototype.toJSON = G;
        String.prototype.toJSON = G
    }
    var I;
    var N;
    var D;
    var B;
    function C(O) {
        H.lastIndex = 0;
        return H.test(O)
            ? '"' + O.replace(H, function (Q) {
                var P = D[Q];
                return typeof P === "string"
                    ? P
                    : "\\u" + ("0000" + Q.charCodeAt(0).toString(16)).slice(-4)
            }) + '"'
            : '"' + O + '"'
    }
    function K(U, V) {
        var R;
        var P;
        var O;
        var W;
        var S = I;
        var T;
        var Q = V[U];
        if (Q && typeof Q === "object" && typeof Q.toJSON === "function") {
            Q = Q.toJSON(U)
        }
        if (typeof B === "function") {
            Q = B.call(V, U, Q)
        }
        switch (typeof Q) {
            case "string":
                return C(Q);
            case "number":
                return isFinite(Q)
                    ? String(Q)
                    : "null";
            case "boolean":
            case "null":
                return String(Q);
            case "object":
                if (!Q) {
                    return "null"
                }
                I += N;
                T = [];
                if (Object.prototype.toString.apply(Q) === "[object Array]") {
                    W = Q.length;
                    for (R = 0; R < W; R += 1) {
                        T[R] = K(R, Q) || "null"
                    }
                    O = T.length === 0
                        ? "[]"
                        : I
                            ? "[\n" + I + T.join(",\n" + I) + "\n" + S + "]"
                            : "[" + T.join(",") + "]";
                    I = S;
                    return O
                }
                if (B && typeof B === "object") {
                    W = B.length;
                    for (R = 0; R < W; R += 1) {
                        if (typeof B[R] === "string") {
                            P = B[R];
                            O = K(P, Q);
                            if (O) {
                                T.push(C(P) + (I
                                    ? ": "
                                    : ":") + O)
                            }
                        }
                    }
                } else {
                    for (P in Q) {
                        if (Object.prototype.hasOwnProperty.call(Q, P)) {
                            O = K(P, Q);
                            if (O) {
                                T.push(C(P) + (I
                                    ? ": "
                                    : ":") + O)
                            }
                        }
                    }
                }
                O = T.length === 0
                    ? "{}"
                    : I
                        ? "{\n" + I + T.join(",\n" + I) + "\n" + S + "}"
                        : "{" + T.join(",") + "}";
                I = S;
                return O
        }
    }
    if (typeof JSON.stringify !== "function") {
        D = {
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        };
        JSON.stringify = function (R, P, Q) {
            var O;
            I = "";
            N = "";
            if (typeof Q === "number") {
                for (O = 0; O < Q; O += 1) {
                    N += " "
                }
            } else {
                if (typeof Q === "string") {
                    N = Q
                }
            }
            B = P;
            if (P && typeof P !== "function" && (typeof P !== "object" || typeof P.length !== "number")) {
                throw new Error("JSON.stringify")
            }
            return K("", {"": R})
        }
    }
    if (typeof JSON.parse !== "function") {
        JSON.parse = function (P, Q) {
            var R;
            function O(V, T) {
                var W;
                var U;
                var S = V[T];
                if (S && typeof S === "object") {
                    for (W in S) {
                        if (Object.prototype.hasOwnProperty.call(S, W)) {
                            U = O(S, W);
                            if (U !== undefined) {
                                S[W] = U
                            } else {
                                delete S[W]
                            }
                        }
                    }
                }
                return Q.call(V, T, S)
            }
            P = String(P);
            A.lastIndex = 0;
            if (A.test(P)) {
                P = P.replace(A, function (S) {
                    return "\\u" + ("0000" + S.charCodeAt(0).toString(16)).slice(-4)
                })
            }
            if (E.test(P.replace(J, "@").replace(M, "]").replace(F, ""))) {
                R = JSON.parse(P);
                return (typeof Q === "function")
                    ? O({
                        "": R
                    }, "")
                    : R
            }
            throw new SyntaxError("JSON.parse")
        }
    }
}());
