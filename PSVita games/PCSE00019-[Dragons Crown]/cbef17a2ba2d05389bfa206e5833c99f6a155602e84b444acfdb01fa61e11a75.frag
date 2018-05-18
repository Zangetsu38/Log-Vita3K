// Fragment shader.
#version 120

uniform vec4 _ToneCurveSrcMin;
uniform vec4 _ToneCurveSrcAnc;
uniform vec4 _ToneCurveSrcMinAncDif;
uniform vec4 _ToneCurveSrcAncMaxDif;
uniform vec4 _ToneCurveDstMin;
uniform vec4 _ToneCurveDstMinAncDif;
uniform vec4 _ToneCurveDstAncMaxDif;
uniform vec4 _ToneCurveUse;
uniform sampler2D _Tex;

void main() {
    gl_FragColor = vec4(0, 1, 0, 1);
}
