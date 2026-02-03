gdjs.Introducao_9502Code = {};
gdjs.Introducao_9502Code.localVariables = [];
gdjs.Introducao_9502Code.GDbtn_9595jogarObjects1= [];
gdjs.Introducao_9502Code.GDbtn_9595jogarObjects2= [];
gdjs.Introducao_9502Code.GDIntro_9595BackgroundObjects1= [];
gdjs.Introducao_9502Code.GDIntro_9595BackgroundObjects2= [];
gdjs.Introducao_9502Code.GDpainel_959501Objects1= [];
gdjs.Introducao_9502Code.GDpainel_959501Objects2= [];
gdjs.Introducao_9502Code.GDbtn_9595replayObjects1= [];
gdjs.Introducao_9502Code.GDbtn_9595replayObjects2= [];
gdjs.Introducao_9502Code.GDAcertoObjects1= [];
gdjs.Introducao_9502Code.GDAcertoObjects2= [];
gdjs.Introducao_9502Code.GDCursorObjects1= [];
gdjs.Introducao_9502Code.GDCursorObjects2= [];
gdjs.Introducao_9502Code.GDAcerto2Objects1= [];
gdjs.Introducao_9502Code.GDAcerto2Objects2= [];
gdjs.Introducao_9502Code.GDAcerto3Objects1= [];
gdjs.Introducao_9502Code.GDAcerto3Objects2= [];
gdjs.Introducao_9502Code.GDAcerto4Objects1= [];
gdjs.Introducao_9502Code.GDAcerto4Objects2= [];
gdjs.Introducao_9502Code.GDAcerto5Objects1= [];
gdjs.Introducao_9502Code.GDAcerto5Objects2= [];


gdjs.Introducao_9502Code.asyncCallback16506660 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Introducao_9502Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Cena_01", false);
}gdjs.Introducao_9502Code.localVariables.length = 0;
}
gdjs.Introducao_9502Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Introducao_9502Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Introducao_9502Code.asyncCallback16506660(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Introducao_9502Code.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.Introducao_9502Code.GDCursorObjects1);
{for(var i = 0, len = gdjs.Introducao_9502Code.GDCursorObjects1.length ;i < len;++i) {
    gdjs.Introducao_9502Code.GDCursorObjects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.Introducao_9502Code.GDCursorObjects1);
{for(var i = 0, len = gdjs.Introducao_9502Code.GDCursorObjects1.length ;i < len;++i) {
    gdjs.Introducao_9502Code.GDCursorObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.Introducao_9502Code.GDCursorObjects1.length ;i < len;++i) {
    gdjs.Introducao_9502Code.GDCursorObjects1[i].hide(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "assets\\audio_02.mp3", 2, false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("btn_jogar"), gdjs.Introducao_9502Code.GDbtn_9595jogarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Introducao_9502Code.GDbtn_9595jogarObjects1.length;i<l;++i) {
    if ( gdjs.Introducao_9502Code.GDbtn_9595jogarObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Introducao_9502Code.GDbtn_9595jogarObjects1[k] = gdjs.Introducao_9502Code.GDbtn_9595jogarObjects1[i];
        ++k;
    }
}
gdjs.Introducao_9502Code.GDbtn_9595jogarObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\btn_press.mp3", false, 100, 1);
}{gdjs.evtTools.sound.fadeSoundVolume(runtimeScene, 2, 0, 0.5);
}
{ //Subevents
gdjs.Introducao_9502Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("btn_replay"), gdjs.Introducao_9502Code.GDbtn_9595replayObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Introducao_9502Code.GDbtn_9595replayObjects1.length;i<l;++i) {
    if ( gdjs.Introducao_9502Code.GDbtn_9595replayObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Introducao_9502Code.GDbtn_9595replayObjects1[k] = gdjs.Introducao_9502Code.GDbtn_9595replayObjects1[i];
        ++k;
    }
}
gdjs.Introducao_9502Code.GDbtn_9595replayObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 2);
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "assets\\audio_02.mp3", 2, false, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Introducao_9502Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Introducao_9502Code.GDbtn_9595jogarObjects1.length = 0;
gdjs.Introducao_9502Code.GDbtn_9595jogarObjects2.length = 0;
gdjs.Introducao_9502Code.GDIntro_9595BackgroundObjects1.length = 0;
gdjs.Introducao_9502Code.GDIntro_9595BackgroundObjects2.length = 0;
gdjs.Introducao_9502Code.GDpainel_959501Objects1.length = 0;
gdjs.Introducao_9502Code.GDpainel_959501Objects2.length = 0;
gdjs.Introducao_9502Code.GDbtn_9595replayObjects1.length = 0;
gdjs.Introducao_9502Code.GDbtn_9595replayObjects2.length = 0;
gdjs.Introducao_9502Code.GDAcertoObjects1.length = 0;
gdjs.Introducao_9502Code.GDAcertoObjects2.length = 0;
gdjs.Introducao_9502Code.GDCursorObjects1.length = 0;
gdjs.Introducao_9502Code.GDCursorObjects2.length = 0;
gdjs.Introducao_9502Code.GDAcerto2Objects1.length = 0;
gdjs.Introducao_9502Code.GDAcerto2Objects2.length = 0;
gdjs.Introducao_9502Code.GDAcerto3Objects1.length = 0;
gdjs.Introducao_9502Code.GDAcerto3Objects2.length = 0;
gdjs.Introducao_9502Code.GDAcerto4Objects1.length = 0;
gdjs.Introducao_9502Code.GDAcerto4Objects2.length = 0;
gdjs.Introducao_9502Code.GDAcerto5Objects1.length = 0;
gdjs.Introducao_9502Code.GDAcerto5Objects2.length = 0;

gdjs.Introducao_9502Code.eventsList1(runtimeScene);
gdjs.Introducao_9502Code.GDbtn_9595jogarObjects1.length = 0;
gdjs.Introducao_9502Code.GDbtn_9595jogarObjects2.length = 0;
gdjs.Introducao_9502Code.GDIntro_9595BackgroundObjects1.length = 0;
gdjs.Introducao_9502Code.GDIntro_9595BackgroundObjects2.length = 0;
gdjs.Introducao_9502Code.GDpainel_959501Objects1.length = 0;
gdjs.Introducao_9502Code.GDpainel_959501Objects2.length = 0;
gdjs.Introducao_9502Code.GDbtn_9595replayObjects1.length = 0;
gdjs.Introducao_9502Code.GDbtn_9595replayObjects2.length = 0;
gdjs.Introducao_9502Code.GDAcertoObjects1.length = 0;
gdjs.Introducao_9502Code.GDAcertoObjects2.length = 0;
gdjs.Introducao_9502Code.GDCursorObjects1.length = 0;
gdjs.Introducao_9502Code.GDCursorObjects2.length = 0;
gdjs.Introducao_9502Code.GDAcerto2Objects1.length = 0;
gdjs.Introducao_9502Code.GDAcerto2Objects2.length = 0;
gdjs.Introducao_9502Code.GDAcerto3Objects1.length = 0;
gdjs.Introducao_9502Code.GDAcerto3Objects2.length = 0;
gdjs.Introducao_9502Code.GDAcerto4Objects1.length = 0;
gdjs.Introducao_9502Code.GDAcerto4Objects2.length = 0;
gdjs.Introducao_9502Code.GDAcerto5Objects1.length = 0;
gdjs.Introducao_9502Code.GDAcerto5Objects2.length = 0;


return;

}

gdjs['Introducao_9502Code'] = gdjs.Introducao_9502Code;
