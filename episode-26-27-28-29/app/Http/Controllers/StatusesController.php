<?php

namespace App\Http\Controllers;

use App\Status;
use App\User;
use Illuminate\Http\Request;

class StatusesController extends Controller
{
    public function index()
    {
        return Status::with('user')->latest()->get()->map(function ($status) {
            return [
                'user' => [
                    'name' => $status->user->name,
                ],
                'body' => $status->body,
                'created_at' => $status->created_at,
            ];
        });
    }

    public function store(Request $request)
    {
        //auth middleware
        //validation
        $this->validate($request, [
            'body' => 'required',
        ]);

        //create status
        $status = User::find(1)->statuses()->create($request->only(['body']));

        return [
            'user' => [
                'name' => $status->user->name,
            ],
            'body' => $status->body,
            'created_at' => $status->created_at,
        ];
    }
}
