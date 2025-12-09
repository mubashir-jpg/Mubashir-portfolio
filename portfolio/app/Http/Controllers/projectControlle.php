<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\project;
class projectControlle extends Controller
{
    public function project(Request $request){
        $validation  = $request->validate(
            [
                 'skill_id' => 'required|exists:personal_informations,id',
                  'pname'   => 'required|String|max:244',
                  'title'  => 'required|String|max:244',
                  'description'  => 'required|String|max:244',
                  'language'  => 'required|String|max:244'
            ]
        );

        if(!$validation){
            return response()->json(
                [
                    'error' => 'error occur in validation'
                ]
            );
        }
        $user = project::create(
            [
                'skill_id' => $request->info_id,
                  'pname' => $request->pname,
                 'title' => $request->title,
                 'description' => $request->description,
                 'language' => $request->language
            ]
        );
        if(!$user){
            return response()->json(
                [
                    'error' => 'data not submitted'
                ]
            );
        }
        return response()->json(
            [
                'message' => 'data submitted'
            ]
        );
    }
  public function projectget(){
     $user = project::all();
     return $user;
  }
}
