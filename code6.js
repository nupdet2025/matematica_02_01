gdjs.FinalCode = {};
gdjs.FinalCode.localVariables = [];
gdjs.FinalCode.GDbackgroundObjects1= [];
gdjs.FinalCode.GDbackgroundObjects2= [];
gdjs.FinalCode.GDpainel_959501Objects1= [];
gdjs.FinalCode.GDpainel_959501Objects2= [];
gdjs.FinalCode.GDText_9595InstrucaoObjects1= [];
gdjs.FinalCode.GDText_9595InstrucaoObjects2= [];
gdjs.FinalCode.GDbtn_9595comecarObjects1= [];
gdjs.FinalCode.GDbtn_9595comecarObjects2= [];
gdjs.FinalCode.GDbtn_9595certoObjects1= [];
gdjs.FinalCode.GDbtn_9595certoObjects2= [];
gdjs.FinalCode.GDbtn_9595errado_959501Objects1= [];
gdjs.FinalCode.GDbtn_9595errado_959501Objects2= [];
gdjs.FinalCode.GDbtn_9595errado_959502Objects1= [];
gdjs.FinalCode.GDbtn_9595errado_959502Objects2= [];
gdjs.FinalCode.GDbtn_9595nextObjects1= [];
gdjs.FinalCode.GDbtn_9595nextObjects2= [];
gdjs.FinalCode.GDbtn_9595reiniciarObjects1= [];
gdjs.FinalCode.GDbtn_9595reiniciarObjects2= [];
gdjs.FinalCode.GDFireworksObjects1= [];
gdjs.FinalCode.GDFireworksObjects2= [];
gdjs.FinalCode.GDAcertoObjects1= [];
gdjs.FinalCode.GDAcertoObjects2= [];
gdjs.FinalCode.GDCursorObjects1= [];
gdjs.FinalCode.GDCursorObjects2= [];
gdjs.FinalCode.GDAcerto2Objects1= [];
gdjs.FinalCode.GDAcerto2Objects2= [];
gdjs.FinalCode.GDAcerto3Objects1= [];
gdjs.FinalCode.GDAcerto3Objects2= [];
gdjs.FinalCode.GDAcerto4Objects1= [];
gdjs.FinalCode.GDAcerto4Objects2= [];
gdjs.FinalCode.GDAcerto5Objects1= [];
gdjs.FinalCode.GDAcerto5Objects2= [];


gdjs.FinalCode.asyncCallback17072212 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.FinalCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Introducao", false);
}gdjs.FinalCode.localVariables.length = 0;
}
gdjs.FinalCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.FinalCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.FinalCode.asyncCallback17072212(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.FinalCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.FinalCode.GDCursorObjects1);
{for(var i = 0, len = gdjs.FinalCode.GDCursorObjects1.length ;i < len;++i) {
    gdjs.FinalCode.GDCursorObjects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.FinalCode.GDCursorObjects1);
{for(var i = 0, len = gdjs.FinalCode.GDCursorObjects1.length ;i < len;++i) {
    gdjs.FinalCode.GDCursorObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.FinalCode.GDCursorObjects1.length ;i < len;++i) {
    gdjs.FinalCode.GDCursorObjects1[i].hide(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "assets\\victory.mp3", 2, true, 60, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("btn_reiniciar"), gdjs.FinalCode.GDbtn_9595reiniciarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FinalCode.GDbtn_9595reiniciarObjects1.length;i<l;++i) {
    if ( gdjs.FinalCode.GDbtn_9595reiniciarObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.FinalCode.GDbtn_9595reiniciarObjects1[k] = gdjs.FinalCode.GDbtn_9595reiniciarObjects1[i];
        ++k;
    }
}
gdjs.FinalCode.GDbtn_9595reiniciarObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FinalCode.GDbtn_9595reiniciarObjects1.length;i<l;++i) {
    if ( gdjs.FinalCode.GDbtn_9595reiniciarObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.FinalCode.GDbtn_9595reiniciarObjects1[k] = gdjs.FinalCode.GDbtn_9595reiniciarObjects1[i];
        ++k;
    }
}
gdjs.FinalCode.GDbtn_9595reiniciarObjects1.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\btn_press.mp3", false, 100, 1);
}{gdjs.evtTools.sound.fadeSoundVolume(runtimeScene, 2, 0, 2);
}
{ //Subevents
gdjs.FinalCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.FinalCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.FinalCode.GDbackgroundObjects1.length = 0;
gdjs.FinalCode.GDbackgroundObjects2.length = 0;
gdjs.FinalCode.GDpainel_959501Objects1.length = 0;
gdjs.FinalCode.GDpainel_959501Objects2.length = 0;
gdjs.FinalCode.GDText_9595InstrucaoObjects1.length = 0;
gdjs.FinalCode.GDText_9595InstrucaoObjects2.length = 0;
gdjs.FinalCode.GDbtn_9595comecarObjects1.length = 0;
gdjs.FinalCode.GDbtn_9595comecarObjects2.length = 0;
gdjs.FinalCode.GDbtn_9595certoObjects1.length = 0;
gdjs.FinalCode.GDbtn_9595certoObjects2.length = 0;
gdjs.FinalCode.GDbtn_9595errado_959501Objects1.length = 0;
gdjs.FinalCode.GDbtn_9595errado_959501Objects2.length = 0;
gdjs.FinalCode.GDbtn_9595errado_959502Objects1.length = 0;
gdjs.FinalCode.GDbtn_9595errado_959502Objects2.length = 0;
gdjs.FinalCode.GDbtn_9595nextObjects1.length = 0;
gdjs.FinalCode.GDbtn_9595nextObjects2.length = 0;
gdjs.FinalCode.GDbtn_9595reiniciarObjects1.length = 0;
gdjs.FinalCode.GDbtn_9595reiniciarObjects2.length = 0;
gdjs.FinalCode.GDFireworksObjects1.length = 0;
gdjs.FinalCode.GDFireworksObjects2.length = 0;
gdjs.FinalCode.GDAcertoObjects1.length = 0;
gdjs.FinalCode.GDAcertoObjects2.length = 0;
gdjs.FinalCode.GDCursorObjects1.length = 0;
gdjs.FinalCode.GDCursorObjects2.length = 0;
gdjs.FinalCode.GDAcerto2Objects1.length = 0;
gdjs.FinalCode.GDAcerto2Objects2.length = 0;
gdjs.FinalCode.GDAcerto3Objects1.length = 0;
gdjs.FinalCode.GDAcerto3Objects2.length = 0;
gdjs.FinalCode.GDAcerto4Objects1.length = 0;
gdjs.FinalCode.GDAcerto4Objects2.length = 0;
gdjs.FinalCode.GDAcerto5Objects1.length = 0;
gdjs.FinalCode.GDAcerto5Objects2.length = 0;

gdjs.FinalCode.eventsList1(runtimeScene);
gdjs.FinalCode.GDbackgroundObjects1.length = 0;
gdjs.FinalCode.GDbackgroundObjects2.length = 0;
gdjs.FinalCode.GDpainel_959501Objects1.length = 0;
gdjs.FinalCode.GDpainel_959501Objects2.length = 0;
gdjs.FinalCode.GDText_9595InstrucaoObjects1.length = 0;
gdjs.FinalCode.GDText_9595InstrucaoObjects2.length = 0;
gdjs.FinalCode.GDbtn_9595comecarObjects1.length = 0;
gdjs.FinalCode.GDbtn_9595comecarObjects2.length = 0;
gdjs.FinalCode.GDbtn_9595certoObjects1.length = 0;
gdjs.FinalCode.GDbtn_9595certoObjects2.length = 0;
gdjs.FinalCode.GDbtn_9595errado_959501Objects1.length = 0;
gdjs.FinalCode.GDbtn_9595errado_959501Objects2.length = 0;
gdjs.FinalCode.GDbtn_9595errado_959502Objects1.length = 0;
gdjs.FinalCode.GDbtn_9595errado_959502Objects2.length = 0;
gdjs.FinalCode.GDbtn_9595nextObjects1.length = 0;
gdjs.FinalCode.GDbtn_9595nextObjects2.length = 0;
gdjs.FinalCode.GDbtn_9595reiniciarObjects1.length = 0;
gdjs.FinalCode.GDbtn_9595reiniciarObjects2.length = 0;
gdjs.FinalCode.GDFireworksObjects1.length = 0;
gdjs.FinalCode.GDFireworksObjects2.length = 0;
gdjs.FinalCode.GDAcertoObjects1.length = 0;
gdjs.FinalCode.GDAcertoObjects2.length = 0;
gdjs.FinalCode.GDCursorObjects1.length = 0;
gdjs.FinalCode.GDCursorObjects2.length = 0;
gdjs.FinalCode.GDAcerto2Objects1.length = 0;
gdjs.FinalCode.GDAcerto2Objects2.length = 0;
gdjs.FinalCode.GDAcerto3Objects1.length = 0;
gdjs.FinalCode.GDAcerto3Objects2.length = 0;
gdjs.FinalCode.GDAcerto4Objects1.length = 0;
gdjs.FinalCode.GDAcerto4Objects2.length = 0;
gdjs.FinalCode.GDAcerto5Objects1.length = 0;
gdjs.FinalCode.GDAcerto5Objects2.length = 0;


return;

}

gdjs['FinalCode'] = gdjs.FinalCode;
