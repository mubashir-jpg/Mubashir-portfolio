<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\skill;
class skillController extends Controller
{
    public function skill(Request $request){
        $validation = $request->validate(
            [
                 'info_id' => 'required|exists:personal_informations,id',
        'sname' => 'required|string|max:244',
        'level'  => 'requried|string|max:244',
        'experince' => 'required|string|max:244'
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
                
          'sname' => $request->sname,
          'level' => $request->level,
          'experince' => $request->experince,
   
            ]
        );

        if(!$user){
            return response()->json(
                [
                    'error' => 'not submitted'
                ]
            );
        }
        return response->json(
            [
                'message' => 'data submitted'
            ]
        );
    }
    public function skillget(){
        $user = skill::all();
        return $user;
    }
}
