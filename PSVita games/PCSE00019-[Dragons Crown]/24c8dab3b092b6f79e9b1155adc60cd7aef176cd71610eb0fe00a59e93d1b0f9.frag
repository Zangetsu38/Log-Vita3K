// Fragment shader.
#version 120

uniform float _GrayValue;
uniform vec4 _R_Rate;
uniform vec4 _G_Rate;
uniform vec4 _B_Rate;
uniform vec4 _ToneCurveSrcMin;
uniform vec4 _ToneCurveSrcAnc;
uniform vec4 _ToneCurveSrcMinAncDif;
uniform vec4 _ToneCurveSrcAncMaxDif;
uniform vec4 _ToneCurveDstMin;
uniform vec4 _ToneCurveDstMinAncDif;
uniform vec4 _ToneCurveDstAncMaxDif;
uniform vec4 _ToneCurveUse;

void main() {
    gl_FragColor = vec4(0, 1, 0, 1);
}
